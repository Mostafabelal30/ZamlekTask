
import React, { Component } from 'react';
import {
 AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
//var Main = require('./main');

var deviceWidth = Dimensions.get('window').width;
var deviceHight = Dimensions.get('window').height;
//import { StackNavigator } from "react-navigation";
//import { stack } from "./navigate";

class SplashPage extends Component {
constructor(props) {
        super(props); 
//       this.showBookDetail = this.showBookDetail.bind(this);
    }

 static navigationOptions = {
    title: 'Welcome',
header: null
  };
    componentWillMount () {
      //const { navigate } = props.navigation;
      const { navigate } = this.props.navigation;

        setTimeout (() => navigate('Login'), 2000); 
    }
    render () {
        return (
            <View style={{flex: 1, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{textAlign:'center', fontSize:deviceWidth*.15,color:'white' }} >اخبار السوق</Text>
            </View>
        );
    }
}

module.exports = SplashPage;