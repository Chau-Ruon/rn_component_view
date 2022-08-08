import { 
    View,
    Text,
} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {HomeScreen} from "./Screen/HomeScreen";
import CheckboxScreen from './Screen/Checkbox/CheckboxScreen'
import InputFlatlistScreen from './Screen/InputFlatlistScreen/InputFlatlistScreen';
import InputFomik from "./Screen/InputFlatlistScreen/InputFomik"
import FlexComponent from "./Screen/Flex/FlexComponent"
import BottomSheet from "./Screen/BottomSheet/index";
import OrtherBottomSheet from "./Screen/BottomSheet/OrtherBottomSheet"
import MapView from "./Screen/MapView/index"
import ShowAlert from "./Screen/Alert/index"



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
                <Stack.Screen name="Checkbox" component={CheckboxScreen} />
                <Stack.Screen name="InputFlatlist" component={InputFlatlistScreen} />
                <Stack.Screen name="InputFomik" component={InputFomik} />
                <Stack.Screen name="FlexComponent" component={FlexComponent} />
                <Stack.Screen name='BottomSheet' component={BottomSheet}/>
                <Stack.Screen name='OrtherBottomSheet' component={OrtherBottomSheet}/>
                <Stack.Screen name='MapView' component={MapView} options={optionsView("Map View")}/>
                <Stack.Screen name='ShowAlert' component={ShowAlert} options={optionsView("Show Alert")}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}