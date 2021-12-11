import React from "react"
import { useParams } from "react-router"
import Post from "../components/Posts/Post"
import Likes from "../components/Posts/Likes"
import Comments from "../components/Posts/Comments"
import useFetchGet from "../hooks/useFetchGet"

function PostView() {
    let [post, setPost] = React.useState({
        likes: [],
        comments: [],
        mapCommentToHandle: []
    })
    const { postID } = useParams()

    React.useEffect(async () => {
        let post = await useFetchGet('posts/' + postID)
        const { handle } = await useFetchGet('profile/user/' + post.user)
        setPost((values) => ({ ...values, handle, ...post }))
    }, [])

    return (
        <div className="flex flex-col gap-4 p-2">
            <Post
                post={post}
                setPost={setPost} />
            <Likes
                post={post}
                setPost={setPost} />
            <Comments
                postID={postID}
                post={post}
                setPost={setPost} /></div>
    )
}

export default PostView