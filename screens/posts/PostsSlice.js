import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
    id: 1,
    title: 'One',
    content: 'Content one'
}]

const PostsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        addPost: (state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {addPost} = PostsSlice.actions
export default PostsSlice.reducer