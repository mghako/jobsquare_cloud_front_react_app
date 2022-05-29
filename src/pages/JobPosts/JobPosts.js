import Api from "../../API/v1/Api"
import { useEffect, useState } from "react"
import Post from "../../components/job/Post"
import Pagination from "../../components/form/Pagination"


const JobPosts = () => {
    
    const [posts, setPosts] = useState()
    const [loading, setLoading] = useState(true)
    const [postsMeta, setPostsMeta] = useState()

    useEffect( ()=> {
        let mounted = true
        const fetchJobPosts = (pageNumber = 1) => {
            Api.get(`posts?page=${pageNumber}`)
            .then((response) => {
                if(mounted) {
                    console.log(response)
                    setPosts(response.data)
                    setPostsMeta(response.data.meta)
                    setLoading(false)
                }
                
            })
        }
        
        fetchJobPosts(1)
        return () => mounted = false
        
    },[])

    
    if(! loading) {
        return (
            <div className="py-10">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        posts.data.map( (post) => {
                            return <Post key={post.id} title={post.title} content={post.content} />
                        })
                    }
                    
                </div>
                <Pagination meta={postsMeta} />
                
            </div>
        )
    }
    return (
        <div className="py-10 relative h-auto">
            <progress className="progress w-50 mx-auto absolute inset-0 top-1/2 align-middle" value="50" max="100"></progress>
        </div>
    )
        
}

export default JobPosts