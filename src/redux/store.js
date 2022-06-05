import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import PostsReducers from './slices/postsSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        posts: PostsReducers
    }
})


export default store