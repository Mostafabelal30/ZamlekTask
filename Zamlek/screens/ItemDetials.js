
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
} from 'react-native';
// import SideMenu from 'react-native-side-menu';
// import Menu from './MenuTest';
var deviceWidth = Dimensions.get('window').width;
var deviceHight = Dimensions.get('window').height;
//var My_ads = require('./my_ads');
// var Main = require('./main');
// import MapView from 'react-native-maps';
import moment from 'moment';
import Communications from 'react-native-communications';
// var DynamicList = require('./company_ads');
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

 state = {
    isOpen: false,
  };
  back(){
    this.props.navigation.goBack()
    return true;
 }
 gohome()
 {

 }

    render() {
  

      var book = this.props.book;

      const start=this.props.navigation.state.params.book.start_date*1000;
  const end=this.props.navigation.state.params.book.end_date*1000;
  const lat=this.props.navigation.state.params.book.lat;
  const long=this.props.navigation.state.params.book.long;
  
  var date = new Date(start);
  var date_finish = new Date(end);

  return (

<View style={{flex:1}}>
<View style={styles.header}>
<TouchableOpacity activeOpacity={.9} onPress={() => this.back()} style={styles.backTouch}>

<Image  source={{uri: 'backicn'}} resizeMode='contain' style={styles.back} />
</TouchableOpacity>
   <Text style={styles.destination}>{this.props.navigation.state.params.book.title}</Text>

  {/* <Text style={styles.destination}>{this.props.navigation.state.params.country==="canada"?this.state.dataObject.FAQs+" - "+this.state.dataObject.Canada:this.state.dataObject.FAQs+" - "+this.state.dataObject.Australia }</Text> */}
  <TouchableOpacity activeOpacity={.9} onPress={debounce(this.gohome, 1000, {
  leading: true,
  trailing: false
})} style={styles.homeTouch}>

<Image  source={{uri: 'home'}} resizeMode='contain' style={styles.home} />
</TouchableOpacity>
</View>
   

       <View style={styles.container}>
         <ScrollView style={styles.scroll}>
         <View style={styles.image_view}>
                <Image style={styles.image_ads} resizeMode='contain'  source={{uri: this.props.navigation.state.params.book.image}} />
              
               <View style={styles.dates_view}>
              <Image style={styles.view_image} resizeMode='contain'  source={{uri: 'view'}} />
               <Text style={styles.text}>{this.props.navigation.state.params.book.views}</Text>
                <Text style={styles.view_date}>{moment(date_finish).format('DD-MM-YYYY')}:</Text>
                <Text style={styles.end_date}>تاريخ الانتهاء</Text>
                <Text style={styles.view_date}>{moment(date).format('DD-MM-YYYY')}:</Text>
                <Text style={styles.add_date}>تاريخ الاضافة</Text>
               </View>
                </View>
                <View style={styles.information}>
                <Text style={styles.black_Title}>خصومات تصل ل 70% </Text>
                <Text style={styles.description}>هدايا كتير في حالة شراء قطعتين او اكتر</Text>
                <Text style={styles.description}>في جميع فروعنا</Text>
                <Text style={styles.orange_Title}>اسم المعلن</Text>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Company_ads')} underlayColor='#dddddd'>

                <Text style={styles.text}>محجوب</Text>
                </TouchableHighlight>
                <Text style={styles.orange_Title}>الهاتف</Text>
                    
          <View style={styles.holder}>
            
         <Text style={styles.Phonetext}>213213213</Text>
         <TouchableOpacity 
         onPress={() => Communications.phonecall('01093363402', true)}
         >
             <Image
            source={{uri: 'callphone'}} style={styles.phonecallimage}/>
            </TouchableOpacity>
           </View>
        
          <View style={styles.holder}>


         <Text style={styles.Phonetext}>65465456</Text>
                       <TouchableOpacity 
                       onPress={() => Communications.phonecall('01093363402', true)}
                       >

             <Image
           source={{uri: 'callphone'}} style={styles.phonecallimage}/>
                             </TouchableOpacity>
           </View>
       
            <View style={styles.holder}>
                       <Text style={styles.Phonetext}>4646666</Text>

                        <TouchableOpacity 
                        onPress={() => Communications.phonecall('01093363402', true)}
                        >

             <Image
           source={{uri: 'callphone'}} style={styles.phonecallimage} />
                    </TouchableOpacity>

           </View>
         
                <Text style={styles.orange_Title}>العنوان</Text>
                <Text style={styles.text}>{this.props.navigation.state.params.book.address}</Text>
            </View>
           {/* <TouchableHighlight onPress={() => Linking.openURL('https://www.google.com/maps/@'+parseInt(lat)+','+parseInt(long)+',7z')} underlayColor='#dddddd'>

            <View  style={styles.map_view}>

                <MapView 
                style={styles.map}
                  initialRegion={{
                             latitude:parseInt(lat),
                             longitude: parseInt(long),
                             latitudeDelta: 0.2,
                             longitudeDelta: 0.2,
                                }}>
                                  <MapView.Marker
      coordinate={{latitude: parseInt(lat),
longitude: parseInt(long),}}
     
    >
    <View style={styles.radauis}>
    <View style={styles.marker}/>

    </View>
    </MapView.Marker>
    </MapView>
    </View>

        </TouchableHighlight> */}

    </ScrollView>
            </View>     
                 </View>

     );
  }


    gotoAllAds(book) {
      
       this.props.navigator.push({
           title: book.title,
           component: DynamicList,
           passProps: {book}
       });
   }
}

const styles = StyleSheet.create({
    container:{
        flex:1
            },
            containerasd:{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#ffffff',
                    flexDirection: 'row',
                    paddingTop: 10,
                    padding:10
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
  image_ads:
  {
    width: deviceWidth,
    height: deviceWidth*.5,
  },
  image_view:
  {
    //marginTop:30
  },
  container:
  {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  navTitle:
{
    // width:deviceWidth*.4,
    // position: 'absolute',
    // zIndex: 10,
    // top: 10,
    // right:deviceWidth*.3,
    fontSize:20,
    color:'#ffffff',
    textAlign:'center',
},
 description: {
        fontSize:deviceWidth*.04,
        color: '#656565'
    },
    information:
    {
       alignItems: 'flex-end', 
        paddingRight:deviceWidth*.1
    },
    orange_Title:
    {
        color:'orange',
        paddingTop:deviceWidth*.01,
        fontSize:deviceWidth*.05
    },
    map:
    {
        left:0,
        right:0,
        top:10,
        bottom:0,
        position: 'absolute',
    },
    black_Title:
    {
           color:'black',
           paddingTop:8,
           fontSize: deviceWidth*.05,
    },
    radauis:
    {
        width: 50,
        height: 50,
        borderRadius:25,
        overflow:'hidden',
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:'rgba(0,112,255,.3)',
        backgroundColor:'rgba(0,112,255,.1)',

    },
    marker:
    {
        width: 20,
        height: 20,
         borderRadius:10,
         overflow:'hidden',
         borderWidth:3,
         borderColor:'white',
         backgroundColor:'#a3422a',

    },
        dates_view:
    {
   justifyContent: 'center',
  alignItems: 'center',
    flexDirection: 'row',
    width:deviceWidth,
    height:deviceWidth*.07,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
   left:0,
    right:0,
    top:deviceWidth*.44,
    bottom:0,
    position: 'absolute',
    zIndex: 1
},
view_image:
{
    width:deviceWidth*.07,
    height:deviceWidth*.07,
    padding:5,
    marginRight:5,
},
view_date:
{
    fontSize:deviceWidth*.03,
    paddingLeft:10
},
add_date:
{
color:'green',
padding:2,
fontSize:deviceWidth*.03
},
end_date:
{
    color:'red',
    padding:2,
    fontSize:deviceWidth*.03
},
text:
{
  fontSize:deviceWidth*.04,
},
Phonetext:{
    width:deviceWidth*.3,
  fontSize:deviceWidth*.04,
  textAlign:'left'
},
    scroll:
  {
flex:1,
  //  top: 20,    
},
map_view:
{
  width:deviceWidth,
  height:deviceHight*.3
},
holder:
{
  flexDirection:'row',
  width:deviceWidth*.5,
  height:deviceHight*.05,
  justifyContent:'flex-end'
},
phonecallimage:
{
  width:deviceWidth*.05,
  height:deviceWidth*.05,
  padding:10,
  marginRight:deviceWidth*.05
}
});

module.exports = Detial;