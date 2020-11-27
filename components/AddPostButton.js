import React from 'react'
import {View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Style} from '../styles/Style'

export const AddPostButton = (props) => {
    return(
        <View style={Style.addPostView}> 
            <Icon.Button 
                name = "edit"
                size = {20}
                backgroundColor = 'white'
                color = 'black'
                borderWidth = {1}
                onPress = {props.onpress}
            >
                Add Post
            </Icon.Button>
        </View>
    )
}