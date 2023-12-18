import React,{useEffect,useRef,useState} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Animated,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { Home,Search,Notify,Setting } from '../../../component/BottomTab';

const Tab = createBottomTabNavigator();

const {width,height} = Dimensions.get("window");

const BottomTabScreen = () => {
  return (
    // <NavigationContainer>
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
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({focuse,size}) => {
                <View>
                    <AntDesign name="home" size={320} color="#900" /> 
                </View>
            }
        }}/>
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Notify" component={Notify} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
    // </NavigationContainer>
  )
}
export default BottomTabScreen
