import { createSlice } from '@reduxjs/toolkit'
import {nanoid} from '@reduxjs/toolkit'
const initialState = []

const PostsSlice = createSlice({
    name:'posts',
    initialState: initialState != null ? initialState : null,
    reducers:{
        addPost: {
            reducer: (state,action)=>{
                state.push(action.payload)
            },
            prepare: (title,user,content) => {
                const id = nanoid()
                const date = new Date().toISOString()
                return {
                    payload: {
                        id,
                        title,
                        user,
                        date,
                        content
                    }   
                }
            }
        },
        updatePost: (state,action)=>{
            const {id,title,content} = action.payload
            const post = state.find(post=>post.id===id)
            if(post) {
                post.title = title,
                post.content = content
            }
        }
    }
})

export const {addPost,updatePost} = PostsSlice.actions
export default PostsSlice.reducer