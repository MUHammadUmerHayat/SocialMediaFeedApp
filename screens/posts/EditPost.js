import React,{useState} from 'react'
import {View,Text,TextInput,Pressable} from 'react-native'
import {Style} from '../../styles/Style'
import {useSelector,useDispatch} from 'react-redux'
import {updatePost} from './PostsSlice'

export const EditPost = ({route,navigation}) => {
    const {id} = route.params
    const dispatch = useDispatch()
    const postSelector = useSelector(state=>state.posts )
    const post=postSelector.find(state=>state.id === id)
    const [title,setTitle] = useState(post.title)
    const [content,setContent] = useState(post.content)

    const addUpdateFunction = () => {
            dispatch(updatePost({
                id: post.id,
                title,
                content
            }))
            navigation.navigate('Single Post')   
    }
    return(
            <View style={Style.addPostMain}>
                <TextInput 
                    placeholder={post.title} 
                    style={Style.addTitle}
                    onChangeText={(item)=>{setTitle(item)}}
                />
                <TextInput
                    multiline={true}
                    numberOfLines={5}
                    placeholder={post.content}
                    style={Style.addContent}
                    onChangeText={(item)=>{setContent(item)}}
                />
                <Pressable onPress={()=>{addUpdateFunction()}}>
                    <View style={Style.addPostButton}>
                        <Text>
                         Update Post
                        </Text>
                    </View>
                </Pressable>
    
            </View>
    )
}