import PostsReducer from '../screens/posts/PostsSlice'
import UsersReducer from '../screens/users/UsersSlice'
import {configureStore} from '@reduxjs/toolkit'

export default configureStore({
    reducer:{
        posts: PostsReducer,
        users: UsersReducer
    }
})