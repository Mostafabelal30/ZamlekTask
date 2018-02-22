
import React, { Component } from 'react';
import {  
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  NativeModules
} from 'react-native';

var deviceWidth = Dimensions.get('window').width;
var deviceHight = Dimensions.get('window').height;
var ImagePicker = NativeModules.ImageCropPicker;
import Video from 'react-native-video';

import moment from 'moment';
import { debounce } from 'lodash';


export default class Detial extends Component {

   constructor(props) {
    super(props);
    this.gohome = this.gohome.bind(this);
    this.state={
      image:null,
      images:"",
      myArr:[],

    }

  }
 static navigationOptions = {
    title: 'Welcome',
header: null
  };


  getInitialState(){
    return { myArr: [] }
  }

  _onPressOut() {
    let temp = this.state.username
    this.state.myArr.push(temp)
    this.setState({
     myArr: this.state.myArr
    })
  }

  back(){
    this.props.navigation.goBack()
    return true;
 }
 gohome()
 {
  this.props.navigation.navigate('Home')

 }


 renderVideo(video) {
  return (<View style={{height: deviceHight*.3, width: deviceWidth*.3}}>
    <Video source={{uri: video.uri, type: video.mime}}
       style={{position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }}
       rate={1}
       paused={false}
       volume={1}
       muted={false}
       resizeMode={'cover'}
       onError={e => console.log(e)}
       onLoad={load => console.log(load)}
       repeat={true} />
   </View>);
}

renderImage(image) {
  return <Image style={{width: deviceWidth*.2,marginLeft:deviceWidth*.01, justifyContent:'center', height: deviceHight*.2, resizeMode: 'contain'}} source={image} />
}

renderAsset(image) {
  if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
    return this.renderVideo(image);
  }

  return this.renderImage(image);
}

 pickMultiple() {
  ImagePicker.openPicker({
    multiple: true,
    waitAnimationEnd: false
  }).then(images => {
    this.setState({
      image: null,
      images: images.map(i => {
        console.log('received image', i);
        return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
      })
    });
  }).catch(e => alert(e));
}
pickMultipleVideo() {
  ImagePicker.openPicker({
    multiple: true,
    //mediaType: "video",
    waitAnimationEnd: false
  }).then(images => {
    this.setState({
      image: null,
      images: images.map(i => {
        console.log('received image', i);
        return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
      })
    });
  }).catch(e => alert(e));
}

renderVideo(video) {
  return (<View style={{height: 300, width: 300}}>
    <Video source={{uri: video.uri, type: video.mime}}
       style={{position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }}
       rate={1}
       paused={false}
       volume={1}
       muted={false}
       resizeMode={'cover'}
       onError={e => console.log(e)}
       onLoad={load => console.log(load)}
       repeat={true} />
   </View>);
}

    render() {
  
      let Arr = this.state.myArr.map((a, i) => {
        return <View key={i} style={styles.addtextinput}>
        
   <TextInput style={styles.phoneTextInput} placeholder="رقم الهاتف"
                    keyboardType = { "phone-pad" }
                    underlineColorAndroid="transparent"
                      placeholderTextColor="gray" 
                      maxLength = {10} 
                      autoFocus = {true}
                     // ref= {(el) => { this.username = el; }}
                        //onChangeText={(username) => this.setState({username})}
                          //  value={this.state.username}
                          /></View>                            
      }) 

  return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity activeOpacity={.9} onPress={() => this.back()} style={styles.backTouch}>
<Image  source={{uri: 'backicn'}} resizeMode='contain' style={styles.back} />
</TouchableOpacity>

  <Text style={styles.destination}> اضافة اعلان</Text>
  <TouchableOpacity activeOpacity={.9} onPress={debounce(this.gohome, 1000, {
  leading: true,
  trailing: false
})} style={styles.homeTouch}>

<Image  source={{uri: 'home'}} resizeMode='contain' style={styles.home} />
</TouchableOpacity>
</View>
   <View style={{width:deviceWidth,alignItems:"center"}}>
<TextInput style={styles.name}  placeholder="عنوان الاعلان"
        underlineColorAndroid="transparent"
        placeholderTextColor="gray"></TextInput>
        <TextInput style={styles.name}  placeholder=" تفاصيل الاعلان"
        underlineColorAndroid="transparent"
  placeholderTextColor="gray"></TextInput>
<View style={styles.selectedimage}>

      <TouchableOpacity 
                    activeOpacity={ 0.5 }
                    onPress={this.pickMultiple.bind(this)}
                    style={ styles.Eligibility }>
        <Text style={ styles.check }>Upload Image</Text>
</TouchableOpacity>
<TouchableOpacity 
                    activeOpacity={ 0.5 }
                    onPress={this.pickMultipleVideo.bind(this)}
                    style={ styles.Eligibility }>
        <Text style={ styles.check }>Upload Video</Text>
</TouchableOpacity>

</View>
<View style={styles.selectedimage}>
        {this.state.image ? this.renderAsset(this.state.image) : null}
        {this.state.images ? this.state.images.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
      </View>

            <Text style={styles.account}>ارقام الهاتف </Text>

<View style={styles.PhoneView}>

 <TouchableOpacity 
                    activeOpacity={ 0.75 }
                    
                    onPress={this._onPressOut.bind(this)}
                    >
            <Image
             style={styles.add_icon}
             resizeMode='contain'
        source={{uri: 'addxhdpi'}}
      />
      </TouchableOpacity>


 <TextInput style={styles.phoneTextInput} underlineColorAndroid="transparent" placeholder="رقم الهاتف"
                  keyboardType = { "phone-pad" }
                    placeholderTextColor="gray" 
                    maxLength = {10} 
                   // ref= {(el) => { this.username = el; }}
                     // onChangeText={(username) => this.setState({username})}
                       //    value={this.state.username}
                       />

     


</View>
{ Arr }
         </View>

            </View>     

     );
  }



}

const styles = StyleSheet.create({
    container:{
        flex:1,
       // width:deviceWidth,
        //alignItems:"center"
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
            Eligibility:
    {
        width:deviceWidth*.3,
        height:deviceHight*.07,
        borderRadius: deviceWidth,
        backgroundColor:"#006767",
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:deviceWidth*.1,
      marginLeft:deviceWidth*.1
      //position:"absolute",
        //bottom:0
    },

    check:
    {
        //textAlign:"center",
        fontSize:deviceWidth*.035,
        color:"white"
    },
    
    selectedimage:
    {
     // flex:1,
      flexDirection:'row',
      marginTop:deviceHight*.03
    },
    PhoneView:
    {
      flexDirection:'row',
      justifyContent:"center"
    },
    account:{
      fontSize:deviceWidth*.05,
       color: '#656565',
      paddingRight:deviceWidth*.04,
      alignSelf: 'flex-end',
    },
    add_icon:
    {
         width:deviceWidth*.05,
        height:deviceWidth*.05,
        marginTop:deviceHight*.03
       // paddingTop:50
    },
    phoneTextInput:
    {
      fontSize:deviceWidth*.04,
        width:deviceWidth*.8,
        height:deviceHight*.06,
       justifyContent:'flex-end',
        padding:10,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#656565',
        marginTop:deviceHight*.02,
        marginLeft:deviceWidth*.1,
        textAlign :'right',

    },
    addtextinput:
    {
      marginLeft:deviceWidth*.05,
    // marginTop:deviceHight*.02
    },
});

module.exports = Detial;