import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Style} from '../styles/Style'
import {View} from 'react-native'

export const HeaderButton = (props) => {
    return(
    <View style={Style.editPost}>
        <Icon.Button
            name='pencil'
            backgroundColor='white'
            color='black'
            onPress={props.onpress}
        />
    </View>
    )
}