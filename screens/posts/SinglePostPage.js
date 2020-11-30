import React from 'react'
import {View,Text} from 'react-native'
import {Style} from '../../styles/Style'
import {useSelector} from 'react-redux'
import {AuthorText} from '../../components/AuthorText'

//single post component header
import {HeaderButton} from '../../components/HeaderButton'
import {ReactionComponent} from '../../components/ReactionComponent'

export const SinglePostPage = ({route,navigation}) => {
    const {id} = route.params
    const postSelector = useSelector(state=>state.posts)
    const post = postSelector.find(post=>post.id===id)

    React.useEffect(()=>{
        navigation.setOptions(
            {
                headerRight:()=>(
                    <HeaderButton onpress={()=>(navigation.navigate('Edit Post',{id:post.id}))}/>
                )
            }
        )  
    },[navigation])

    return(
        <View style={Style.singlePostMain}>
            <View style={Style.singlePostTitleView}>
                <Text style={Style.singlePostTitle}>{post.title}</Text>
                <AuthorText user={post.user} date={post.date}/>
            </View>
            <View style={Style.singlePostContentView}>
                <Text style={Style.singlePostContent}> {post.content} </Text>
                <View style={Style.singlePostReactionsView}>
                    <ReactionComponent post={post}/>
                </View>
            </View>
        </View>
    )
}