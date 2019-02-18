
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';




//import screens
import Home from './src/screens/Home'
import List from './src/screens/List'
import Tinder from './src/screens/Tinder'



const BottomTab = createBottomTabNavigator({
  List: {
      screen: List
  },
  Swipe: {
      screen: Tinder
  }

});

const AppNavigator= createStackNavigator({
  Home: {
      screen: Home
  },
  TabBased: {
      screen:BottomTab
  } 
  
});


export default createAppContainer(AppNavigator);
