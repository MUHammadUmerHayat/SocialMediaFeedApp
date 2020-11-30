import React from 'react'
import {View,Text} from 'react-native'
import {Style} from '../styles/Style'
import { useSelector } from 'react-redux'

export const AuthorText = (props) =>{
    const authorSelector = useSelector(state=>state.users)
    const author = authorSelector && props.user ? authorSelector.find(user=>user.name===props.user):''
    return(
        <View>
            <Text style={Style.authorText}>by, {author.name}</Text>
        </View>
    )
}