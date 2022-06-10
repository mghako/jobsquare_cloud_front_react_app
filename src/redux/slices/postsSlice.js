import { createSlice } from "@reduxjs/toolkit";


export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        loading: false,
        postsData: [],
        error: false
    },
    reducers: {
        postsLoading: (state) => {
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
    },
    // extraReducers: {
    //     [postsLoading]: (state) => {
    //         return state.loading = true
    //     },
    //     [postsRecieved]
    // }
})

export const { postsLoading, postsRecieved, postError } = postsSlice.actions

export default postsSlice.reducer