import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id:1, name:'nabeel muhammed'},
    {id:2, name:'shaheer muhammed'},
    {id:3, name:'shafeen muhammed'},
    {id:4, name:'shameem muhammed'},
    {id:5, name:'ameen muhammed'},
    {id:6, name:'haroon muhammed'},
]

const UsersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{}
})

export default UsersSlice.reducer