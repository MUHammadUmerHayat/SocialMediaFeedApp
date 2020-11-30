import React from 'react'
import {View,Text} from 'react-native'
import {Style} from '../styles/Style'
import { useSelector } from 'react-redux'
import {parseISO,formatDistanceToNow} from 'date-fns'

export const AuthorText = (props) =>{
    const date = parseISO(props.date)
    const relativeTime = formatDistanceToNow(date)

    const authorSelector = useSelector(state=>state.users)
    const author = authorSelector && props.user ? authorSelector.find(user=>user.name===props.user):''
    return(
        <View style={Style.authorTextView}>
            <Text style={Style.authorText}>Posted {relativeTime} ago</Text>
            <Text style={Style.authorText}>author:  {author.name}</Text>
        </View>
    )
}