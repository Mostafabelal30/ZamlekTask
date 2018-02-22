

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  WebView,
  Image,
  View,
  AsyncStorage,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions
} from 'react-native';

var deviceWidth = Dimensions.get('window').width;
var deviceHight = Dimensions.get('window').height;
import { NavigationActions } from "react-navigation";
import Popup from 'react-native-popup';
import { debounce } from 'lodash';

export default class Splash extends Component {
    constructor(props) {
        super(props); 
       this.SignUp = this.SignUp.bind(this);
       this.gohome = this.gohome.bind(this);

this.state={
   
     email:'',
     password:'',

    
  }
    }

 static navigationOptions = {
    title: 'Welcome',
header: null
  };

 
  


 fillFields()
 {
  this.popup.confirm({
    content: [<Text style={{fontSize:deviceWidth*.04,padding:50}}>يرجى ملء هذه الحقول</Text>],
    ok: {

      text: "OK",
      style: {
        color: '#006767',
        fontSize:deviceWidth*.04
      },
     
     },
 
  });
 }

 SignUp()
 { 
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

   if(this.state.email===""||this.state.password==="")
   {
     this.fillFields()
   }
   else{
    if(reg.test(this.state.email)===false)
    {
      this.formatEmail()

    }    else{

      //alert(responseData)
      AsyncStorage.setItem('email',JSON.stringify(this.state.email))
      AsyncStorage.setItem('password',JSON.stringify(this.state.password))

      this.props.navigation.navigate('Login')
  
    
   }
   }
 }


 formatEmail()
 {
  this.popup.confirm({
    content: [<Text style={{fontSize:deviceWidth*.04,padding:50}}>من فضلك ادخل الايميل بشكل صحيح</Text>],
    ok: {

      text:   "OK",
      style: {
        color: '#006767',
        fontSize:deviceWidth*.04
      },
     
     },
 
  });
 }

 gohome()
{
  this.props.navigation.navigate('Home')
}
  render() {
    return (
      <View style={styles.container}>
    
      <View style={styles.card2}>




<TextInput
            style={{height:deviceHight*.1,borderRadius:deviceWidth*.05,  color: '#06bebd',fontSize:deviceWidth*.04, width:deviceWidth*.8, marginTop:deviceWidth*.02 ,paddingVertical:deviceWidth*.005 ,borderColor:"gray",borderWidth:2}}
            underlineColorAndroid="transparent"
            keyboardType="email-address"
            placeholder="Email "
            placeholderTextColor="#fff" 
            ref= {(el) => { this.email = el; }}
            onChangeText={(email) => this.setState({email})}
            
            value={this.state.email}
            useNativeDriver
          />

<TextInput
            style={{height:deviceHight*.1,borderRadius:deviceWidth*.05, color: '#06bebd',fontSize:deviceWidth*.04,width:deviceWidth*.8, marginTop:deviceWidth*.02 ,paddingVertical:deviceWidth*.005,borderColor:"gray",borderWidth:2}}
            underlineColorAndroid="transparent" 
            secureTextEntry={true}
            placeholder="Password "
            placeholderTextColor="#fff" 
            ref= {(el) => { this.password = el; }}
     onChangeText={(password) => this.setState({password})}
     
     value={this.state.password}
          />
{/* <TextInput style={styles.message} underlineColorAndroid="transparent" placeholder="The message ... "
                   //keyboardType = { "phone-pad" }
                   //selectTextOnFocus
                     placeholderTextColor="gray" 
                    // defaultValue={"The subject ..."} 
                     //onFocus={(username) => this.setState({username:"0"})}
                    // ref= {(el) => { this.username = el; }}
     //onChangeText={(username,username2) => this.change(username,username2)}
     //value={this.state.username}
     ref= {(el) => { this.message = el; }}
     onChangeText={(message) => this.setState({message})}
     
     value={this.state.message}
     /> */}
    <TouchableOpacity activeOpacity={.9} onPress={debounce(this.SignUp, 1000, {
        leading: true,
        trailing: false
      })}  style={styles.Eligibility}>
        <Text style={styles.check}>SignUp</Text>
     </TouchableOpacity>

       <TouchableOpacity activeOpacity={.9} onPress={debounce(this.gohome, 1000, {
        leading: true,
        trailing: false
      })}  style={styles.Eligibility}>
        <Text style={styles.check}>الرئيسية</Text>
     </TouchableOpacity>


         </View>

     

         {/* <Ads/> */}
     
         <Popup ref={popup => this.popup = popup }/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#006767',
     width:deviceWidth
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  thumbnail:
  {
      //zIndex:2,
      width:deviceWidth,
      height:deviceHight*.44,
  },
  header:
  {
      height:deviceHight*.1,
      width:deviceWidth,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"#006767",
      flexDirection:'row',
      
  },
  destination:
  {
      color:"white",
      fontSize:deviceWidth*.055,
      textAlign:"center"
  },
  back:
  {
    width:deviceWidth*.04,
    height:deviceHight*.04,
    //right:10,
  
  },
  home:
  {
    width:deviceWidth*.06,
  height:deviceHight*.06,
  //right:10,
  
  },
  backTouch:
  {
    width:deviceWidth*.2,
    height:deviceWidth*.1,
    justifyContent:"center",
    position: 'absolute',
   left:deviceWidth*.05,
  // top:30,
   //padding: 10,
  },
  homeTouch:
  {
    width:deviceWidth*.2,
    position: 'absolute',
   left:deviceWidth*.9,
  // top:30,
   //padding: 10,
  },
  send:
  {
      width:deviceWidth*.9,
      height:deviceHight*.07,
      backgroundColor:"#06bebd",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:deviceWidth*.5,
    marginTop:deviceWidth*.02,
    
   
  },
  sendText:
  {
      textAlign:"center",
      fontSize:deviceWidth*.055,
      color:"white"
  },
  card1: {
      //  paddingVertical: 16,
      },
      card2: {
        //  padding: 16,
        //  height:deviceHight*.7,
         width:deviceWidth,
      // justifyContent: 'center',
        alignItems: 'center',
      },
      input: {
        marginTop: 4,
       // width:deviceWidth*.9,
       // height:deviceHight*.01,
      borderRadius:deviceWidth*.5,
        borderWidth:1,
        borderColor:"#a7a7a7",
        // marginTop: 4,
        // borderWidth:1,
        // borderColor:"gray",
        // borderRadius:10 
      },
      countryFromTextInput:
      {
        width:deviceWidth*.9,
        height:deviceHight*.08,
        borderRadius:deviceWidth*.2,
        borderWidth:2,
        borderColor:"gray",
        marginTop: deviceWidth*.02,
        backgroundColor: '#f9f5ed',
        fontSize:deviceWidth*.04,
        color: '#91627b',
      },
      message:
      {
        width:deviceWidth*.9,
        height:deviceHight*.15,
        //borderRadius:deviceWidth*.03,
       // borderWidth:1,
       // borderColor:"#a7a7a7",
        marginTop: deviceWidth*.02,
        borderRadius:deviceWidth*.05,
        borderColor:"gray",
        borderWidth:2,
        fontSize:deviceWidth*.04,
        backgroundColor: '#f9f5ed',
        color: '#91627b',
      },  Eligibility:
      {
          width:deviceWidth,
          height:deviceHight*.1,
          backgroundColor:"#06bebd",
        justifyContent: 'center',
        alignItems: 'center',
        position:"absolute",
          bottom:0
      },
      check:
      {
          //textAlign:"center",
          fontSize:deviceWidth*.055,
          color:"white"
      },
      description:
      {
        fontSize:deviceWidth*.035,
        color:"black",
       // fontWeight: 'bold' 
      },
      descriptionArabic:
      {
        fontSize:deviceWidth*.035,
        color:"black",
        textAlign:"right"
      },
      scroll:
      {
    flex:1,
    //alignItems:"center",
    //marginBottom: 0 
       // top: 20,
       // paddingTop:50, 
       //marginTop:50   
    },
    Keyboard:
    {
      //flex:1
      //marginTop:-50
      //paddingTop:50, 
    },Eligibility:
    {
        width:deviceWidth*.9,
        height:deviceHight*.1,
        borderRadius: deviceWidth,
        backgroundColor:"white",
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:deviceWidth*.1
      //position:"absolute",
        //bottom:0
    },
    check:
    {
        //textAlign:"center",
        fontSize:30,
        color:"#06bebd"
    },
});
