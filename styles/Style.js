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
    addPostView:{
        alignSelf: 'flex-end',
        marginBottom:hp('4%'),
        marginTop:hp('2%')
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
        elevation: 5,
    },
    //PostComponent.js
    placeholder:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    postsMain:{
        paddingTop: hp('1%'),
        paddingBottom: hp('1%'),
        flex:1
    },
    noPosts:{
        color:'white',
        fontStyle:'italic',
        fontSize:hp('3%'),
        fontWeight: 'bold'
    },
    viewpost:{
        alignSelf: 'flex-end',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: hp('2.2%')
    },
    //singlepostpage component
    singlePostMain: {
        flex:1,
        paddingTop: hp('2%'),
        paddingBottom: hp('2%'),
        paddingRight:wp('1%'),
        paddingLeft:wp('1%'),
        backgroundColor:'gray'
    },
    singlePostTitleView:{
        backgroundColor:'white',
        paddingTop:hp('3%'),
        paddingBottom:hp('3%'),
        paddingRight:wp('2%'),
        paddingLeft:wp('2%'),
        marginBottom:hp('1%')
    },
    singlePostTitle:{
        fontSize: hp('3%')
    },
    singlePostContentView:{
        flex:1,
        backgroundColor:'white',
        paddingTop:hp('1%'),
        paddingBottom:hp('1%'),
        paddingRight:wp('2%'),
        paddingLeft:wp('2%')
    },
    singlePostContent:{
        fontSize:hp('2.2%')
    },
    editPost:{
        alignItems:'flex-end',
        backgroundColor:'white',
        marginBottom:hp('1%'),
        marginTop:hp('1%'),
        paddingTop:hp('1%'),
        paddingBottom:hp('1%'),
    },
    //author text style
    authorText:{
        fontSize:hp('1.75%'),
        fontStyle:'italic'
    },
    authorTextView: {
        marginTop:hp('1.5%')
    }
})