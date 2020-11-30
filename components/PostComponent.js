import React from 'react'
import {View,Text} from 'react-native'
import {Style} from '../styles/Style'
import {useSelector} from 'react-redux'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
    
const postSelector = useSelector(state => state.posts)  
    export const PostComponent = postSelector.map( post => (
        <View style={Style.postView}  key={post.id}>
          <View style={Style.postStyle}>
              <Text style={Style.title}>{post.title}</Text>
              <Text style={Style.content}>{post.content.substring(0,100)}</Text>
              <Pressable onPress={()=>{navigation.navigate('Single Post')}} key={post.id}>
                  <Text style={Style.viewpost}>View Post</Text>    
              </Pressable>
              </View>
        </View>
    ) )