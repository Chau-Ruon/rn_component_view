import { 
    View,
    Text,
} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {HomeScreen} from "./Screen/HomeScreen";
import {
    TCheckbox,
    Checkbox,
    CheckboxArray,
} from './component/Checkbox/index'
import {IndexScreen} from './Screen/Checkbox/IndexScreen'
import InputFlatlistScreen from './Screen/InputFlatlistScreen/InputFlatlistScreen';
import InputFomik from "./Screen/InputFlatlistScreen/InputFomik";
import FlexComponent from "./Screen/Flex/FlexComponent"
import BottomSheet from "./Screen/BottomSheet/index";
import OrtherBottomSheet from "./Screen/BottomSheet/OrtherBottomSheet"
import MapView from "./Screen/MapView/index"
import ShowAlert from "./Screen/Alert/index"
import HeaderTop from './Screen/Header/HeaderTab';
import BottomTabScreen from './Screen/BottomTab/BottomTabScreen';
import TBottomTabScreen from "./Screen/BottomTab/TBottomTabScreen"
import {Loading} from "./Screen/Loading/Loading";
import {
    LoadingDots,
    OrtherLoading,
    Thu,
} from './component/Loading/index'


const screenOptions = {
    headerTransparent: true,
    headerShown: false,
};

const optionsView = (title) => {
    // const {title} = props
    return {
        title:title,
        contentStyle:{
            alignItems:"center"
        },
        headerTitleAlign:"center"
    }
}

export const App = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={screenOptions} />
              
                {/* Checkbox */}
                <Stack.Screen name="Checkbox" component={IndexScreen} />
                <Stack.Screen name="TCheckbox" component={TCheckbox} />
                <Stack.Screen name="CheckboxItems" component={Checkbox} />
                <Stack.Screen name="CheckboxArray" component={CheckboxArray} />
                

                <Stack.Screen name="InputFlatlist" component={InputFlatlistScreen} />
                <Stack.Screen name="InputFomik" component={InputFomik} />
                <Stack.Screen name="FlexComponent" component={FlexComponent} />
                <Stack.Screen name='BottomSheet' component={BottomSheet}/>
                <Stack.Screen name='OrtherBottomSheet' component={OrtherBottomSheet}/>
                <Stack.Screen name='MapView' component={MapView} options={optionsView("Map View")}/>
                <Stack.Screen name='ShowAlert' component={ShowAlert} options={optionsView("Show Alert")}/>
                <Stack.Screen name='HeaderTop' component={HeaderTop}options={screenOptions} />


                {/* Loading */}
                <Stack.Screen name='Loading' component={Loading}options={screenOptions} />
                <Stack.Screen name='LoadingDots' component={LoadingDots} options={optionsView("Loading")} />
                <Stack.Screen name='OrtherLoading' component={OrtherLoading} options={optionsView("Orther Loading Dots")} />
                

               
                <Stack.Screen name='BottomTabScreen' component={BottomTabScreen} options={screenOptions}/>
                <Stack.Screen name='TBottomTabScreen' component={TBottomTabScreen} options={screenOptions}/>
                
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}