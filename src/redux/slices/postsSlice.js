import { createSlice } from "@reduxjs/toolkit";


const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        loading: false,
        postsData: [],
        error: false
    },
    reducers: {
        postsLoading: (state, action) => {
            state.loading = true
        },
        postsRecieved: (state, action) => {
            if(state.loading === true) {                
                state.posts = action.payload
            }
        },
        postError: (state) => {
            state.error = true
            state.loading = false
        }
    }
})

export const { postsLoading, postsRecieved, postError } = postsSlice.actions

export default postsSlice.reducer