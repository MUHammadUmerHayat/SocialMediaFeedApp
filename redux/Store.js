import PostsReducer from '../screens/posts/PostsSlice'
import {configureStore} from '@reduxjs/toolkit'

export default configureStore({
    reducer:{
        posts: PostsReducer
    }
})