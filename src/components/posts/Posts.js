import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPosts } from "../../redux/api/postsAPI"
import Post from "../job/Post"
import PostsPagination from "./PostsPagination"

const Posts = () => {
    const posts = useSelector(state => state.posts.posts)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        let mounted = true
        
        const fetchJobPosts = () => {
            if(mounted === true) {
                setLoading(true)
                getPosts(dispatch)
            }
        }
        
        fetchJobPosts()

        return () => { 
            mounted = false
        }
        
    },[dispatch])

    if(posts) {
        return (
            <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {
                        posts.data.map( (post) => {
                            return <Post key={post.id} title={post.title} content={post.content} />
                        })
                    }
                    
                </div>
                <PostsPagination data={posts}/>
            </>
        )    
    }
    return (
        <div className="py-10 relative h-auto">
            <progress className="progress w-50 mx-auto absolute inset-0 top-1/2 align-middle" value="50" max="100"></progress>
        </div>
    )
}

export default Posts