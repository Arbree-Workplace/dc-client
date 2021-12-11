import * as React from "react"

function Post(props) {
    return (
        <div className="flex flex-col gap-2">
            <div className="w-min px-2 py-1 rounded bg-blue-700 text-white shadow shadow-sky-400">
                {props.post.handle}</div>
            <div className="text-2xl">
                {props.post.text}</div></div>
    )
}

export default Post