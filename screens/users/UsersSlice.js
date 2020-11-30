import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id:1, name:'nabeel muhammed'},
    {id:2, name:'shaheer muhammed'}
]

const UsersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{}
})

export default UsersSlice.reducer