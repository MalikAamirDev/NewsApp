import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Home from '../../Screens/Home';
// import SavedNews from '../../Screens/SavedNews';
// import Signup from '../../Screens/Signup';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import styles from '../../Styles/Styles';
// import TabNavigation from './TabNavigation';
import StackNavigation from './StackNavigation';

// const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
