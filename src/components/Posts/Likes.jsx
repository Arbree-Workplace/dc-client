import * as React from "react"
import useFetchPost from "../../hooks/useFetchPost"
import useAuth from "../../hooks/useAuth"

function Likes(props) {
    const [likeDisabled, setLikeDisabled] = React.useState(true)
    const [unlikeDisabled, setUnlikeDisabled] = React.useState(true)

    let { user } = useAuth()

    React.useEffect(() => {
        let modified = false
        for (const like of props.post.likes) {
            if (like.user === user) {
                setUnlikeDisabled(false)
                setLikeDisabled(true)
                modified = true
                break
            }
        }
        if (!modified) {
            setLikeDisabled(false)
            setUnlikeDisabled(true)
        }
    }, [props.post.likes])

    const handleLikePost = async (event) => {
        event.preventDefault()
        const data = await useFetchPost('posts/like/' + props.post._id);
        (data.likes) ? props.setPost((values) => ({ ...values, likes: data.likes })) : null
    }

    const handleDislikePost = async (event) => {
        event.preventDefault()
        const data = await useFetchPost('posts/unlike/' + props.post._id);
        (data.likes) ? props.setPost((values) => ({ ...values, likes: data.likes })) : null
    }

    return (
        <div className="w-max flex flex-row gap-3 items-center">
            <div className="flex flex-row gap-2">
                <button disabled={likeDisabled ? true : false}
                    className={"px-2 py-1 rounded bg-emerald-600 text-white shadow shadow-emerald-400 " + (likeDisabled ? "opacity-50" : "")}
                    onClick={(event) => handleLikePost(event)}>
                    👍</button>
                <button disabled={unlikeDisabled ? true : false}
                    className={"px-2 py-1 rounded bg-rose-600 text-white shadow shadow-rose-400 " + (unlikeDisabled ? "opacity-50" : "")}
                    onClick={(event) => handleDislikePost(event)}>
                    👎</button></div>
            <div className="px-3 py-1 rounded border-2 border-cyan-700 shadow shadow-sky-400">{props.post.likes.length}</div></div>
    )
}

export default Likes