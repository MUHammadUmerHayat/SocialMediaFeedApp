/*
---------DropDown component props-----------
        items : drop down items,object array,object keys: key & label
        itemTextColor : drop down item color
        defaultValue : default selector item value
        selectorTextColor : selector item color
        dropDownBackground : drop down modal background color
        headerText : header text of drop down modal
        headerTextColor : header text color of drop down
*/
import React,{useState} from 'react'
import {View,Text,Modal,FlatList} from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { Style as style } from '../styles/Style'
import Icon from 'react-native-vector-icons/FontAwesome'

export const DropDown=(props)=>{
    /*Drop Down Props:
    */
    const headerTextColor=props.headerTextColor ? props.headerTextColor:'#e53939'
    const itemTextColor=props.itemTextColor ? props.itemTextColor:'black'
    const defaultValue = props.defaultValue ? props.defaultValue:'Choose an Item'
    const selectorTextColor=props.selectorTextColor ? props.selectorTextColor:'black'
    const dropDownBackground=props.dropDownBackground ? props.dropDownBackground:'white'
    const headerText = props.headerText ? props.headerText:'Choose Item'

    const [modalstatus,setModal]=useState(false)
    const [defaultDropListValue,setDefaultDropListValue]=useState(defaultValue)
    

    const renderFunction = ( {item} )=>{
            return(
                    <Pressable key={item.id.toString()} onPress={
                        ()=>{
                            props.onItemChange(item.name)
                            setDefaultDropListValue(item.name)
                            setModal(false)
                        }       
                    }>
                        <View style={style.dropDownItem}>
                            <Text style={[
                            style.dropDownText,
                            {   
                                color:itemTextColor
                            }]}>{item.name}</Text>
                        </View>
                    </Pressable>
            )
        }
    const one = () => {
        return(
            <Text style={[
                style.dropDownSelectorText,
                {
                    color:'black'
                }   
            ]}>{defaultDropListValue}</Text>
        )
    }

    const two = () => {
        return(
            <Text style={[
                style.dropDownSelectorText,
                {
                    color:'gray'
                }   
            ]}>{defaultDropListValue}</Text>
        )
    }   
    return(
        <View style={ style.main}>
            <Pressable style={style.bloodgroup} onPress={()=>{
                    setModal(true)
                }}>
                    <View style={style.dropTextView}>
                       {defaultDropListValue == defaultValue ? two():one()}
                    </View>
                    <View style={style.bloodGroupImage}>
                       <Icon 
                            name='caret-down'
                            color='gray'
                            size={30}
                       />
                    </View>
            </Pressable>
            <View style={style.underLine}></View>
            <Modal
                visible={modalstatus}
                transparent={true}
            >
                <Pressable style={style.modal} onPress={()=>{setModal(false)}}>
                    <View  style={style.dropDownView}>
                        <Text style={[
                            style.dropDownHeaderText,
                            {
                                color:headerTextColor
                            }
                        ]}>{headerText}</Text>
                        <FlatList 
                            data = {props.items}
                            renderItem = {renderFunction}
                            contentContainerStyle = { style.dropDownView }
                            keyExtractor = { item => item.id.toString() }
                        />
                    </View>
                </Pressable>
            </Modal>
        </View>
    )
}