import React from "react"
import Post from "../job/Post"

const Posts = (props) => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                props.posts.data.map( (post) => {
                    return <Post key={post.id} title={post.title} content={post.content} />
                })
            }
            
        </div>
    )
}

export default Posts