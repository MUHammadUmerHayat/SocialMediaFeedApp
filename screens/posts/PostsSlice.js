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
                const reactions = {
                    'clap': 0,
                    'excited': 0,
                    'angry': 0,
                    'celebration': 0,
                    'funny': 0
                }
                return {
                    payload: {
                        id,
                        title,
                        reactions,
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
        },
        updateReaction: (state,action) => {
            const {id,name} = action.payload
            post = state.find(post => post.id===id)
            if(post){
                post.reactions[name] += 1
            }
        }
    }
})

export const {addPost,updatePost,updateReaction} = PostsSlice.actions
export default PostsSlice.reducer