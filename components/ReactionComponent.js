import React from 'react'
import {View,Button,Text,Pressable} from 'react-native'
import {Style} from '../styles/Style'
import { useDispatch } from 'react-redux'
import { updateReaction } from '../screens/posts/PostsSlice'
import { id } from 'date-fns/locale'

const reaction = {
    'clap': '👏',
    'excited': '🤩',
    'angry': '😡',
    'celebration': '🥳',
    'funny': '😂 '
}
export const ReactionComponent = (props) => {
    const post = props.post
    const dispatch = useDispatch()
    const onButtonPress = (name) => {
       console.log(dispatch(updateReaction({
           id: post.id,
           name: name
       })))
    }
    const ReactionButton = Object.entries(reaction).map(([name,emoji])=>{
        return(
            <Pressable key={name} onPress={()=>{onButtonPress(name)}} style={Style.emoji}>
                <Text style={Style.emojiSize}>{emoji} {post.reactions[name]}</Text>
            </Pressable>

        )
    })
    return(
        <View style={Style.emojiRow}>
            {ReactionButton}
        </View>
    )
}