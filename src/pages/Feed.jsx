import * as React from "react"
import useFetchGet from "../hooks/useFetchGet"
import PublicPosts from "../components/Posts/PublicPosts"

function Feed() {
    let [posts, setPosts] = React.useState([{
        likes: [],
        comments: [],
        mapPostToCreator: []
    }])

    React.useEffect(async () => {
        let posts = await useFetchGet('posts')
        let promiseArr = posts.map(async post => {
            let { handle } = await useFetchGet('profile/user/' + post.user)
            return { _id: post._id, handle, user: post.user, text: post.text, likes: post.likes, comments: post.comments }
        })
        Promise.all(promiseArr).then(postData => setPosts(postData))
    }, [])

    return (
        <PublicPosts
            posts={posts}
            setPosts={setPosts} />
    )
}

export default Feed