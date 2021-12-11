import * as React from "react"
import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import useFetchDelete from "../../hooks/useFetchDelete"

function PublicPosts(props) {
    const { user } = useAuth()

    const handlePostdelete = async (event) => {
        console.log(event.target.id)
        const postID = event.target.id
        const isDeleted = await useFetchDelete('posts/' + postID)
        const filtered =  isDeleted ? props.posts.filter(post => post._id != postID) : props.posts
        props.setPosts(filtered)
    }

    return (
        <div className="w-fit flex flex-col gap-5 p-2">
            {props.posts.map((post, idx) => (
                <div key={idx} className="each-post flex flex-col gap-2">
                    <div className="post-content flex flex-row gap-2 items-center p-2 rounded border-2 border-blue-600 shadow shadow-blue-300">
                        <div className="px-2 py-1 rounded bg-emerald-600 text-white shadow shadow-teal-400">
                            <Link to={"/feed/" + post._id}>View</Link></div>
                        <div>
                            {post.text}</div></div>
                    <div className="post-stats flex flex-row gap-3 items-center">
                        <div className="creator px-1 rounded border-2 border-teal-700 shadow shadow-green-400">
                            {post.handle}</div>
                        <div className="likes-stats flex flex-row gap-1">
                            <div>👍</div>
                            <div>{post.likes.length}</div></div>
                        <div className="comments-stats flex flex-row gap-1">
                            <div>💬</div>
                            <div>{post.comments.length}</div></div>
                        {(post.user === user) ? (
                            <div className="delete cursor-pointer"
                                id={post._id}
                                onClick={(event) => handlePostdelete(event)}>
                                🗑️
                            </div>) : null}
                    </div></div>))}</div>
    )
}

export default PublicPosts