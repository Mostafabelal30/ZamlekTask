// import { AppRegistry } from 'react-native';
// import App from './App';



import { AppRegistry } from 'react-native';
// import App from './App';


import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
  import Home from './screens/Home';
import Splash from './screens/Splash';
  import ItemDetials from './screens/ItemDetials';
 import Login from './screens/Login';
  import AddItem from './screens/AddItem';
  import SignUp from './screens/SignUp';
//  import VisaView from './screens/VisaView';
//  import Tabs from './screens/Tabs';
//  import Question from './screens/question';
//  import FaqsCategory from './screens/FaqsCategory';
//  import FaqsQuestion from './screens/FaqsQuestion';
//  import FaqsAnswer from './screens/FaqsAnswer';
//  import Thanks from './screens/thanks';
//  import Jobs from './screens/Jobs';


 
//  import Preparations from './screens/preparations';
export const Stack=StackNavigator({
  SignUp:{screen:SignUp},
  AddItem:{screen:AddItem},

  Splash:{screen:Splash},
 Login:{screen:Login},
 //AddItem:{screen:AddItem},

    
    Home:{screen:Home},
    ItemDetials:{screen:ItemDetials},
   // Login:{screen:Login},
   SignUp:{screen:SignUp},
    // Result:{screen:Result},
    // VisaView:{screen:VisaView},
    // Contact:{screen:Contact},
    // Question:{screen:Question},
    // FaqsCategory:{screen:FaqsCategory},
    // FaqsQuestion:{screen:FaqsQuestion},
    // FaqsAnswer:{screen:FaqsAnswer},
    // Thanks:{screen:Thanks},
    // Jobs:{screen:Jobs},


    // Tabs:{screen:Tabs},
    })
    export default class Zamlek extends Component {
        render() {
          const { navigation } = this.props;
          return (
            
            <Stack navigation={ navigation }/>
          );
        }
      }






AppRegistry.registerComponent('Zamlek', () => Zamlek);
