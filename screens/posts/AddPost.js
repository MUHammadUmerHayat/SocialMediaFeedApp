import React,{useState} from 'react'
import {View,TextInput,Pressable,Text} from 'react-native'
import {Style} from '../../styles/Style'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import {addPost} from './PostsSlice'

export const AddPost = ({navigation}) => {
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const dispatch = useDispatch()
    const addPostFunction = () => {
        dispatch(addPost({
            id: nanoid(),
            title: title,
            content: content
        }))
        navigation.navigate('Posts')
    }
    return(
        <View style={Style.addPostMain}>
            <TextInput 
                placeholder="title" 
                style={Style.addTitle}
                onChangeText={(item)=>{setTitle(item)}}
            />
            <TextInput
                multiline={true}
                numberOfLines={5}
                placeholder="content"
                style={Style.addContent}
                onChangeText={(item)=>{setContent(item)}}
            />
            <Pressable onPress={()=>{addPostFunction()}}>
                <View style={Style.addPostButton}>
                    <Text>
                        Add Post
                    </Text>
                </View>
            </Pressable>

        </View>
    )
}