import React from 'react'
import {View,Text,Pressable} from 'react-native'
import {AddPostButton} from '../../components/AddPostButton'
import {useSelector} from 'react-redux'
import {Style} from '../../styles/Style'
import {AuthorText} from '../../components/AuthorText'

export const Posts = ({navigation}) => {
    const postSelector = useSelector(state => state.posts)  
    
    //individual post
    const post = postSelector.map( post => (
          <View key={post.id} style={Style.postStyle}>
              <Text style={Style.title}>{post.title}</Text>
              <AuthorText user={post.user}/>
              <Text style={Style.content}>{post.content.substring(0,50)}</Text>
              <Pressable onPress={()=>{navigation.navigate('Single Post',{id:post.id})}}>
                  <Text style={Style.viewpost}>View Post</Text>    
              </Pressable>
              </View>
    ))
    
    //if there is no post
    const placeholder = (
      <View key={'empty'} style={Style.placeholder}>
        <Text style={Style.noPosts}>No Posts to Show</Text>
      </View>
    )

    return(
        <View style={Style.mainStyle}>
            <AddPostButton onpress={()=>{navigation.navigate('Add Post')}}/>
            <View style={Style.postsMain}>
                { post[0] == null ? placeholder:post}
            </View>
        </View>
    )
}
