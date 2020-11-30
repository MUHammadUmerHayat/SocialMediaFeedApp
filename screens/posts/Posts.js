import React from 'react'
import {View,Text,Pressable,ScrollView} from 'react-native'
import {useSelector} from 'react-redux'
import {Style} from '../../styles/Style'

//components
import {AddPostButton} from '../../components/AddPostButton'
import {AuthorText} from '../../components/AuthorText'
import { ReactionComponent } from '../../components/ReactionComponent'
export const Posts = ({navigation}) => {
    const postSelector = useSelector(state => state.posts)
    const posts = postSelector.slice().sort((a,b)=>b.date.localeCompare(a.date))  
    //individual post
    const post = posts.map( post => (
          <View key={post.id} style={Style.postStyle}>
              <Text style={Style.title}>{post.title}</Text>
              <AuthorText user={post.user} date={post.date}/>
              <Text style={Style.content}>{post.content.substring(0,50)}</Text>
              <ReactionComponent post={post}/>
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
        <ScrollView style={Style.mainStyle}>
            <AddPostButton onpress={()=>{navigation.navigate('Add Post')}}/>
            <View style={Style.postsMain}>
                { post[0] == null ? placeholder:post}
            </View>
        </ScrollView>
    )
}
