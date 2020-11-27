import React from 'react'
import {View,Text} from 'react-native'
import {Style} from '../styles/Style'
import {useSelector} from 'react-redux'
    
export const PostComponent = () => {
  const postSelector = useSelector(state => state.posts)  
  const post = postSelector.map( post => (
    <View style={Style.postStyle} key={post.id}>
          <Text style={Style.title}>{post.title}</Text>
          <Text style={Style.content}>{post.content}</Text>
        </View>
  ) )
  return(
    <View style={Style.postView}>
        {post}
    </View>
    )
}
    