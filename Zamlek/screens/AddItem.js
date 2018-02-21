
import React, { Component } from 'react';
import {  
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Linking,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  NavigatorIOS,
  TextInput
} from 'react-native';

var deviceWidth = Dimensions.get('window').width;
var deviceHight = Dimensions.get('window').height;

import moment from 'moment';
import { debounce } from 'lodash';


export default class Detial extends Component {

   constructor(props) {
    super(props);
    this.gohome = this.gohome.bind(this);

  }
 static navigationOptions = {
    title: 'Welcome',
header: null
  };


  back(){
    this.props.navigation.goBack()
    return true;
 }
 gohome()
 {

 }

    render() {
  

  return (

<View style={{flex:1}}>
<View style={styles.header}>
<TouchableOpacity activeOpacity={.9} onPress={() => this.back()} style={styles.backTouch}>
<Image  source={{uri: 'backicn'}} resizeMode='contain' style={styles.back} />
</TouchableOpacity>

  {/* <Text style={styles.destination}>{this.props.navigation.state.params.country==="canada"?this.state.dataObject.FAQs+" - "+this.state.dataObject.Canada:this.state.dataObject.FAQs+" - "+this.state.dataObject.Australia }</Text> */}
  <TouchableOpacity activeOpacity={.9} onPress={debounce(this.gohome, 1000, {
  leading: true,
  trailing: false
})} style={styles.homeTouch}>

<Image  source={{uri: 'home'}} resizeMode='contain' style={styles.home} />
</TouchableOpacity>
</View>
   
<TextInput style={styles.name}  placeholder="عنوان الاعلان"
        underlineColorAndroid="transparent"
        placeholderTextColor="gray"></TextInput>
        <TextInput style={styles.name}  placeholder=" تفاصيل الاعلان"
        underlineColorAndroid="transparent"
  placeholderTextColor="gray"></TextInput>
      
            </View>     

     );
  }



}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:deviceWidth,
        alignItems:"center"
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
            name:
            {
                width:deviceWidth*.9,
                height:deviceHight*.06,
                alignItems: 'center',
                padding:10,
                borderRadius:5,
                borderWidth:1,
                borderColor:'#656565',
                marginTop:20,
                textAlign :'right',
                fontSize:deviceWidth*.04
        
            },

});

module.exports = Detial;