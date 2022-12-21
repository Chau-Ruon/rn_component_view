import React,{useState,useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLOR, SIZE, TEXT } from '../../../theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeLiquid,
  HotLiquid,
  NotifyLiquid,
  SettingLiquid,
  NewPostLiquid,
  PostLiquid,
} from '../../../component/BottomTab';
import Animated,{
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { position } from 'native-base/lib/typescript/theme/styled-system';


const Tab = createBottomTabNavigator();
// const pressed = useSharedValue(false);
  // const startingPosition = 100;
  // const x = useSharedValue(startingPosition);
  // const y = useSharedValue(startingPosition);
  // // const uas = useAnimatedStyle(() => {
  // //   return {
  // //     backgroundColor: pressed.value ? '#FEEF86' : '#001972',
  // //     transform: [{ translateX: x.value }, { translateY: y.value }],
  // //   };
  // // });


  

const LiquidNavigation = () => {
  return (
    <>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopRightRadius: 24,
          borderTopLeftRadius: 24,
          backgroundColor:"#9B9992"
          // paddingBottom: 16,
          // height: 60,
        },
      }}>
        <Tab.Screen name="HomeLiquid" component={HomeLiquid} options={{
          tabBarLabelStyle:{display:"none"},
          tabBarIcon: ({color,focused,size}) => {
            return(
              <View>
                <AntDesign name="home" size={20} />
              </View>
          )}
        }}/>
        <Tab.Screen name="HotLiquid" component={HotLiquid} options={{
          tabBarLabelStyle:{display:"none"},
          tabBarIcon: ({color,focused,size}) => {
            return(
              <View>
                <Ionicons name="flash" size={20} />
              </View>
          )}
        }}/>
        <Tab.Screen name="NewPostLiquid" component={Liquid} options={{
          tabBarLabelStyle:{display:"none"},
          tabBarIcon: ({color,focused,size}) => {
            return(
              <View>
                {/* <AntDesign name="plus" size={20} /> */}
              </View>
          )}
        }}/>
        <Tab.Screen name="NotifyLiquid" component={NotifyLiquid} options={{
          tabBarLabelStyle:{display:"none"},
          tabBarIcon: ({color,focused,size}) => {
            return(
              <View>
                <AntDesign name="notification" size={20} />
              </View>
          )}
        }}/>
        <Tab.Screen name="SettingLiquid" component={SettingLiquid} options={{
          tabBarLabelStyle:{display:"none"},
          tabBarIcon: ({color,focused,size}) => {
            return(
              <View>
                <AntDesign name="home" size={20} />
              </View>
          )}
        }}/>
      </Tab.Navigator>

      <Liquid/>
    </>
  );
}
const Liquid = () =>{
  const startingPosition = 100;
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);
  const MIN_LEDGE = 25; 
  const SHEET_MAX_HEIGHT = SIZE.height * 0.3;
  const SHEET_MIN_HEIGHT = SIZE.height * 0.1;
  const MAX_UPWARD_TRANSLATE_Y = SHEET_MIN_HEIGHT - SHEET_MAX_HEIGHT;


  const eventHandler = useAnimatedGestureHandler({
    onStart: ({event, ctx}) => {
      console.log('onStart: ', event);
      // pressed.value = true;
    },
    onActive: ({event, ctx}) => {
      console.log('onActive: ', event);
      x.value = startingPosition + event.translationX;
      y.value = startingPosition + event.translationY;
    },
    // onEnd: ({event, ctx}) => {
      // pressed.value = false;
      // x.value = withSpring(startingPosition);
      // y.value = withSpring(startingPosition);
    // },
  });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: y.value }],
    };
  });

  return(
    <PanGestureHandler onGestureEvent={eventHandler}>
      <Animated.View style={[styles.container,rBottomSheetStyle]} >
        <Animated.View style={[styles.btnContainer,rBottomSheetStyle]}></Animated.View>
        <NewPostLiquid/>
      </Animated.View>
    </PanGestureHandler>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fccb00',
    height:SIZE.height,
    width:SIZE.width,
    zIndex:9,
    bottom:-(SIZE.height - 360),
    position:"absolute"
  },
  btnContainer:{
    backgroundColor:'#000000',
    height:SIZE.height,
    width:60,
    justifyContent:"center",
    alignSelf:"center",
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
    zIndex:9,
    // bottom:-(SIZE.height - 10),
    bottom:190,
    position:"absolute"
  }
})

export default LiquidNavigation;
