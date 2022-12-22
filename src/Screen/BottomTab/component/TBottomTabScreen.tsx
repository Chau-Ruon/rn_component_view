import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { createBottomTabNavigator,BottomTabNavigationOptions,BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Home,Search,Notify,Setting } from '../../../component/BottomTab';
const Tab = createBottomTabNavigator();

const TBottomTabScreen = () => {
  return (
    <Tab.Navigator  screenOptions={{
        tabBarShowLabel: false,
        tabBarIconStyle: { display: "none" },
        tabBarStyle:{
            backgroundColor:"white",
            position:"absolute",
            bottom:30,
            height:60,
            marginHorizontal:20,
            borderRadius:10,

            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
        }
      }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Notify" component={Notify} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
  )
}

export default TBottomTabScreen

const styles = StyleSheet.create({})