import React from "react"
import { useDispatch } from "react-redux"
import { getPostsByPage } from "../../redux/api/postsAPI"

const PostsPagination = ({data}) => {

    const dispatch = useDispatch()
    const fetchPostsByPage = (id) => {
        dispatch(getPostsByPage({page: id}))
    }

    return (
        <div className="btn-group flex justify-center align-middle my-4">
            {
                data.meta.links.map( (link, index) => {
                    return <a key={index} onClick={() => fetchPostsByPage(link.label)} className="btn" href="#"> <span dangerouslySetInnerHTML={{__html: link.label}}></span> </a>
                })
            }
        </div>
    )
}

export default PostsPagination