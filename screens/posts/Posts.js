import React from 'react'
import {View} from 'react-native'
import {PostComponent} from '../../components/PostComponent'
import {AddPostButton} from '../../components/AddPostButton'
import {Style} from '../../styles/Style'

export const Posts = ({navigation}) => {
    return(
        <View style={Style.mainStyle}>
            <AddPostButton onpress={()=>{navigation.navigate('Add Post')}}/>
            <PostComponent/>
        </View>
    )
}