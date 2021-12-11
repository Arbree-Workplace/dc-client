import React from "react"
import useFetchPost from "../../hooks/useFetchPost"
import useFetchGet from "../../hooks/useFetchGet"
import useFetchDelete from "../../hooks/useFetchDelete"
import useAuth from "../../hooks/useAuth"

function Comments(props) {
    const [commentInput, setCommentInput] = React.useState(null)
    const { user } = useAuth()

    React.useEffect(() => {
        const promisesArr = props.post.comments.map(async comment => {
            let { handle } = await useFetchGet('profile/user/' + comment.user)
            return { _id: comment._id, handle, user: comment.user, text: comment.text }
        })
        Promise.all(promisesArr).then(arr => props.setPost((values) => ({ ...values, mapCommentToHandle: [...arr] })))
    }, [props.post.comments])

    const handleInputChange = (event) => {
        setCommentInput(event.target.value)
    }

    const handleCreateComment = async (event) => {
        event.preventDefault()
        const payload = { text: commentInput }
        const { comments } = await useFetchPost('posts/comment/' + props.post._id,
            payload)
        props.setPost((values) => ({ ...values, comments }))
    }

    const handleDeleteComment = async (event) => {
        const commentID = event.target.id
        const isDeleted = await useFetchDelete('posts/comment/' + props.postID + '/' + commentID)
        const filtered = isDeleted ? props.post.comments.filter(comment => comment._id != commentID) : props.post.comments
        props.setPost((values) => ({ ...values, comments: filtered }))
    }

    return (
        <div className="w-fit">
            <form
                className="flex flex-col gap-2"
                onSubmit={(event) => handleCreateComment(event)}>
                <textarea
                    cols="30" rows="2" minLength="10" maxLength="300"
                    value={commentInput || ""}
                    className="p-2 rounded border-2 border-blue-600 resize-none outline-none"
                    onChange={(event) => handleInputChange(event)} />
                <button className=" w-min px-2 py-1 ml-auto rounded bg-gray-700">
                    💬</button></form>
            <div className="comments w-fit flex flex-col gap-4">
                <header
                    className="text-2xl">Comments</header>
                <div className="flex flex-col gap-3">
                    {props.post.mapCommentToHandle.map((comment, idx) => (
                        <div key={idx} className="flex flex-row gap-2 items-center">
                            <div
                                className="w-fit px-2 py-1 rounded border-2 border-blue-700 shadow shadow-sky-700">
                                {comment.handle}</div>
                            <div>
                                {comment.text}</div>
                            {(user === comment.user) ? (
                                <div id={comment._id} className="cursor-pointer"
                                    onClick={(event) => handleDeleteComment(event)}>🗑️</div>
                            ) : null}</div>))}</div></div></div>
    )
}

export default Comments