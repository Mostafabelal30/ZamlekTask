/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  Image,
  View,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';

var deviceWidth = Dimensions.get('window').width;
var deviceHight = Dimensions.get('window').height;
import { NavigationActions } from "react-navigation";
import moment from 'moment';

import {CirclesLoader, PulseLoader, TextLoader, DotsLoader,LineDotsLoader,EatBeanLoader,BubblesLoader} from 'react-native-indicator';
 import { debounce } from 'lodash';

export default class Splash extends Component {
    constructor(props) {
        super(props); 
//       this.showBookDetail = this.showBookDetail.bind(this);
this.gocontact = this.gocontact.bind(this);
this.gohome = this.gohome.bind(this);

this.state = {
   // page:1,
      isLoading: true,
      direction:'',
     // lang:this.props.navigation.state.params.lang ,
      //dataObject:this.props.navigation.state.params.dataObject,
      dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2
      })
  };
    }

 static navigationOptions = {
    title: 'Welcome',
header: null
  };
  componentDidMount() {
  //  const Index = this.props.navigation.state.params.Index;
   // alert(this.props.navigation.state.params.Index)
//    AsyncStorage.getItem("direction").then((value) => {
//     this.setState({direction:JSON.parse(value)})
//    }).done();
    this.fetchData();
   }
 
   fetchData() {
    fetch('https://www.internetplus.biz/hazem/linkAPI.php?id=31/')
    .then((response) => response.json())
    .then((responseData) => {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData.ads),
            isLoading: false
        });
    })
    .done();
}
  back(){
    this.props.navigation.goBack()
    return true;
 }

 rendersold()
 {
     return(
         <View style={{alignItems:"flex-start",width:deviceWidth*.44}}>
        <Image
        style={styles.soldimage}
        resizeMode='contain'
        //source={{uri: "images"}}
    source={{uri: 'sold'}}/>
    </View>
     )
 }

 renderBook(book) {
    const start=book.start_date*1000;
    const end=book.end_date*1000;
    const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';
  
    var date = new Date(start);
    var date_finish = new Date(end);
     //date.toString("MMM dd");
         return (
  
  
      <TouchableHighlight onPress={() => this.props.navigation.navigate('ItemDetials',{ book: book})} underlayColor='#dddddd'>
  <View>
         <View style={styles.containerasd}>
          
        <View style={styles.rightContainer}>
             <Text style={styles.title}>{book.title}</Text>
              <View style={styles.add_date}>
                  <Text style={styles.view_date}>{moment(date).format('DD-MM-YYYY')}:</Text>
                  <Text style={styles.greenText}>تاريخ الاضافة</Text>
                  </View>
                  <View style={styles.add_date}>
                  <Text style={styles.view_date}>{moment(date_finish).format('DD-MM-YYYY')}:</Text>
                  <Text style={styles.redText}>تاريخ الانتهاء</Text>
                  </View>
             <View style={styles.viewContainer}>
             {book.sold==="true"?this.rendersold():null}

                 <Text style={styles.viewNumber}>{book.views} </Text>
                 <Image
               style={styles.viewimage}
               resizeMode='contain'
               //source={{uri: "images"}}
           source={{uri: 'view'}}/>

        </View>
             </View>
               <Image
               style={styles.thumbnail}
               resizeMode='contain'
               //source={{uri: "images"}}
           source={{uri:book.image}}/>
        
             </View>
             <View style={styles.separator} />
             </View>
             
                        </TouchableHighlight >
  
   );
     }
     gocontact()
     {
       //this.props.navigation.navigate('Contact',{lang:this.state.lang,dataObject:this.state.dataObject})
     }
     gohome()
     {
      // this.props.navigation.navigate('ChooseCountries',{lang:this.state.lang})
      this.props.navigation.navigate('Home')
     }

  render() {
    return (
//    

<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity activeOpacity={.9} onPress={() => this.back()} style={styles.backTouch}>

<Image  source={{uri: 'backicn'}} resizeMode='contain' style={styles.back} />
</TouchableOpacity>

  <Text style={styles.destination}>الرئيسية</Text>
  <TouchableOpacity activeOpacity={.9} onPress={debounce(this.gohome, 1000, {
  leading: true,
  trailing: false
})} style={styles.homeTouch}>

<Image  source={{uri: 'home'}} resizeMode='contain' style={styles.home} />
</TouchableOpacity>
</View>
{this.state.isLoading?<View style={{alignItems:"center",justifyContent:"center",height:deviceHight*.8}}>
      <CirclesLoader size={deviceWidth*.1} dotRadius={deviceWidth*.03}/>
</View>:  
      <View style={{height:deviceHight*.9}}>
<ScrollView showsHorizontalScrollIndicator={false}
showsVerticalScrollIndicator={false} style={{}}><ListView
        ref={(listView) => { _listView = listView; }}
   // onEndReached={this._onEndReached.bind(this)}
   // onEndReachedThreshold={5}
          dataSource={this.state.dataSource}
          //  initialListSize={2}
          //  pageSize={3}
          renderRow={this.renderBook.bind(this)}
          style={styles.listView}
          /></ScrollView></View>}


</View>
    );
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
    thumbnail: {
        width: deviceWidth*.4,
        height: deviceHight*.15,
       marginRight: 10,
        marginBottom: 5,
        //borderRadius:5,
        borderWidth:3,
        borderColor:'#eeeeee',
    },
    viewimage:{
        width: deviceWidth*.05,
        height: deviceHight*.025,
        alignSelf:'stretch'
    },
    soldimage:
    {
        width: deviceWidth*.12,
        height: deviceHight*.06,
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 10,
    },
    redText:{
        color: 'red',
        fontSize: deviceWidth*.038,
    },
     view_date:
    {
      fontSize:deviceWidth*.038
    },
    viewNumber:
    {
      fontSize:deviceWidth*.025 
    },

    greenText:{
        color: 'green',
        fontSize: deviceWidth*.038,
    },
    viewContainer:{
         flex: 1,
    flexDirection: 'row',
    },
    title: {
        fontSize: deviceWidth*.05,
    },
    separator: {
       height: deviceHight*.002,
       backgroundColor: '#dddddd'
   },
  add_date:
    {
          flex: 1,
          flexDirection: 'row',
 },
      listView: {
       backgroundColor: '#F5FCFF',
       paddingBottom:deviceHight*.17,
   },
});
