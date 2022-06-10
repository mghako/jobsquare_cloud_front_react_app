import Api from '../../API/v1/Api'
import { postsLoading, postsRecieved, postError } from '../slices/postsSlice'

export const getPosts = async (dispatch) => {
    dispatch(postsLoading())
    try {
        const response = await Api.get('posts')
        dispatch(postsRecieved(response.data))
    } catch (error) {
        dispatch(postError())
    }
      
}


export const getPostsByPage = (payload) => async (dispatch) => {
    dispatch(postsLoading())
    try {
        const response = await Api.get(`posts?page=${payload.page}`)
        dispatch(postsRecieved(response.data))
    } catch (error) {
        dispatch(postError())
    }
}