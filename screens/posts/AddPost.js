import React,{useState} from 'react'
import {View,TextInput,Pressable,Text} from 'react-native'
import {Style} from '../../styles/Style'
import { useDispatch } from 'react-redux'
import {addPost} from './PostsSlice'
//components
import { DropDown } from '../../components/DropDown'
//redux
import { useSelector } from 'react-redux'
  

export const AddPost = ({navigation}) => {
    //author selector
    const authorList = useSelector( state => state.users )
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [user,setUser] = useState('')
    const dispatch = useDispatch()
    const addPostFunction = () => {
        dispatch(addPost(
            title,
            user,
            content
        ))
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
            <DropDown 
                items = { authorList }
                defaultValue = 'choose user' 
                headerText = 'Choose Author'
                onItemChange = { item => setUser(item) }
                headerTextColor = 'black'
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