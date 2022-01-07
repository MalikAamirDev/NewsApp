import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {NavigationContainer} from '@react-navigation/native';
import Signup from '../../Screens/Signup';
import TabNavigation from './TabNavigation';
import SingleNews from '../../Screens/SingleNews';
import Apple from '../../Screens/Apple';
import Tech from '../../Screens/Tech';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Tabs" component={TabNavigation} />
      <Stack.Screen name="Apple" component={Apple} />
      <Stack.Screen name="Tech" component={Tech} />
      <Stack.Screen name="SingleNews" component={SingleNews} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
