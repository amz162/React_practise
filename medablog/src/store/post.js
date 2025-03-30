import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allPost : null,
    userPost: null
}


const postslice = createSlice({
    name: "post",
    initialState,
    reducers: {
        post: (state, action) => {
            state.allPost = action.payload.userPost;
            state.userPost = action.payload.userPost;
        },
     }
})




export const {post} = postslice.actions;

export default postslice.reducer;