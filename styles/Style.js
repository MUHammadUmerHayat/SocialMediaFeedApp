import {StyleSheet} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'

export const Style = StyleSheet.create({
    mainStyle: {
        flex:1,
        paddingRight: wp('1%'),
        paddingLeft: wp('1%'),
        paddingTop: hp('1%'),
        paddingBottom: hp('1%'),
        backgroundColor:'gray'
    },
    postStyle: {
        backgroundColor: 'white',
        paddingRight: wp('4%'),
        paddingLeft: wp('4%'),
        paddingTop: hp('2%'),
        paddingBottom: hp('2%'),
        elevation: 3,
        marginBottom: hp('1%'),
    },
    postView: {
        marginTop: hp('1%'),
        marginBottom: hp('1%'),
    },
    addPostView:{
        alignSelf: 'flex-end'
    },
    title:{
        fontSize: hp('3%')
    },
    content: {
        paddingTop: hp('2%')
    },
    addPostMain:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'gray'
    },
    addTitle: {
        backgroundColor:'white',
        width: wp('95%'),
        borderWidth:wp('.1%'),
        paddingRight: wp('4%'),
        paddingLeft: wp('4%'),
        marginBottom: hp('2%')
    },
    addContent: {
        backgroundColor:'white',
        width: wp('95%'),
        borderWidth:wp('.1%'),
        marginBottom: hp('2%'),
        paddingRight: wp('2%'),
        paddingLeft: wp('2%'),
    },
    addPostButton: {
        backgroundColor:'white',
        borderWidth:wp('.2%'),
        width: wp('95%'),
        paddingRight: wp('4%'),
        paddingLeft: wp('4%'),
        paddingTop: hp('1%'),
        paddingBottom: hp('1%'),
        alignItems:'center',
        elevation: 5
    }
})