import * as React from "react"
import useFetchPost from "../../hooks/useFetchPost"

function MakePost() {
    const [postInput, setPostInput] = React.useState(null)

    const handlePostInput = (event) => {
        setPostInput(event.target.value)
    }

    const handlePostCreate = async (event) => {
        event.preventDefault()
        const payload = { text: postInput }
        const data = await useFetchPost('posts', payload)
        console.log(data)
        // Nothing to do here more, as fetching posts for a single user kind of api
        // is not provided
    }

    return (
        <div className="w-max flex flex-col gap-2">
            <header className="p-2 rounded bg-indigo-700 text-white shadow shadow-indigo-400">
                Create a Post 💭</header>
            <form className="flex flex-col gap-2"
                onSubmit={(event) => handlePostCreate(event)}>
                <textarea
                    className="p-2 rounded border-2 border-blue-600 shadow shadow-sky-400 resize-none outline-none"
                    name="post"
                    value={postInput || ''}
                    cols="30" rows="4"
                    onChange={(event) => handlePostInput(event)} />

                <button className="ml-auto px-2 py-1 rounded bg-blue-700 text-white shadow shadow-sky-400 text-xl">
                    🚀</button></form></div>
    )
}

export default MakePost