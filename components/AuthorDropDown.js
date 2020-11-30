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
import {StyleSheet,View,Text,Modal,ScrollView} from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import Icon from 'react-native-vector-icons/FontAwesome'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const style=StyleSheet.create(
    {
        main:{
        },
        text:{
            color:'white',
            fontWeight:'bold'
        },
        modal:{
            flex:1,
            backgroundColor:'rgba(255, 255, 255, .4)',
            justifyContent:'center',
            alignItems:'center',
            padding:20,
        },
        insidemodal:{   
            padding: 15,
            elevation: 5,
            borderRadius:5.,
            height:'80%',
            justifyContent:'center'
        },
        bloodgroup:{
            flexDirection:'row',
            padding:10,
            elevation:5,
            backgroundColor:'white',
        },
        dropTextView:{
            flex:5,
            alignSelf:'flex-start'
        },
        bloodGroupImage:{
            flexDirection:'row-reverse',
            flex:1,
            padding:10  
        },
        dropDownSelectorText:{
            fontSize:20,
            padding:5
        },
        dropDownText:{
            fontSize:20,
            padding:15
        },
        dropDownHeaderText:{
            fontWeight:'bold',
            fontSize:25,
            paddingTop:20,
            paddingBottom:20,
            paddingRight:50
        },
        line:{
            backgroundColor:'#B81524',
            height:'2%',
            borderRadius:10,
            top:'1%'
        },
        underLine:{
            backgroundColor:'#B81524',
            height:hp('.2%')
        }
    }
)

export const AuthorDropDown=(props)=>{
    /*Drop Down Props:
    */
    const headerTextColor=props.headerTextColor ? props.headerTextColor:'#e53939'
    const itemTextColor=props.itemTextColor ? props.itemTextColor:'black'
    const defaultValue = props.defaultValue ? props.defaultValue:'Choose an Item'
    const selectorTextColor=props.selectorTextColor ? props.selectorTextColor:'black'
    const dropDownBackground=props.dropDownBackground ? props.dropDownBackground:'white'
    const headerText = props.headerText ? props.headerText:'Choose Item'
    const pressableItem = props.items.map(
        (a,index)=>{
            return(
                <View  key={index}>
                    <Pressable onPress={
                        ()=>{
                            setDefaultDropListValue(a)
                            setModal(false)
                        }
                    }>
                        <Text key={index} style={[
                        style.dropDownText,
                        {   
                            color:itemTextColor
                        }]}>{a}</Text>
                    </Pressable>
                </View>
            )
        }
    )

    const [modalstatus,setModal]=useState(false)
    const [defaultDropListValue,setDefaultDropListValue]=useState(defaultValue)
    return(
        <View style={style.main}>
            <Pressable style={style.bloodgroup} onPress={()=>{
                    setModal(true)
                }}>
                    <View >
                        <Text style={[
                            style.dropDownSelectorText,
                            {
                                color:selectorTextColor
                            }
                        ]}>{defaultDropListValue}</Text>
                    </View>
                    <View>
                       <Icon 
                            name='caret-down'
                            color='#B81524'
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
                    <View  style={[
                        style.insidemodal,
                        {
                            backgroundColor:dropDownBackground,
                        }]}>
                        <Text style={[
                            style.dropDownHeaderText,
                            {
                                color:headerTextColor
                            }
                        ]}>{headerText}</Text>
                        <ScrollView>
                            {pressableItem}
                        </ScrollView>
                    </View>
                </Pressable>
            </Modal>
        </View>
    )
}