import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native';
import styles from '../../Styles/Styles';
import React from 'react';
// import Signup from '../../Screens/Signup';
import Home from '../../Screens/Home';
import SavedNews from '../../Screens/SavedNews';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Search from '../../Screens/Search';
import UserSetting from '../../Screens/UserSetting';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#ef3f49',
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 30,
          right: 30,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 50,
          height: 60,
          paddingBottom: 5,
          ...styles.elevation8,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                <MaterialCommunityIcons
                  name="home"
                  size={35}
                  color={focused ? '#ef3f49' : 'grey'}
                />
              </>
            );
          },
        }}>
        {props => <Home {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                <AntDesign
                  name="search1"
                  size={30}
                  color={focused ? '#ef3f49' : 'grey'}
                />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="SavedNews"
        component={SavedNews}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                <MaterialCommunityIcons
                  name="bookmark-multiple"
                  size={30}
                  color={focused ? '#ef3f49' : 'grey'}
                />
              </>
            );
          },
        }}
      />

      <Tab.Screen
        name="Setting"
        component={UserSetting}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <>
                <FontAwesome
                  name="gear"
                  size={30}
                  color={focused ? '#ef3f49' : 'grey'}
                />
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
