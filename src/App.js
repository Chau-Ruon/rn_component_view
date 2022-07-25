import { 
    View,
    Text,
} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from "./Screen/HomeScreen";
import CheckboxScreen from './Screen/Checkbox/CheckboxScreen'
import InputFlatlistScreen from './Screen/InputFlatlistScreen/InputFlatlistScreen';
import InputFomik from "./Screen/InputFlatlistScreen/InputFomik"
import T from "./Screen/T/Flex"


const Stack = createNativeStackNavigator();

const screenOptions = {
    headerTransparent: true,
    headerShown: false,
};

export const App = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="CheckboxScreen" component={CheckboxScreen} />
                <Stack.Screen name="InputFlatlistScreen" component={InputFlatlistScreen} />
                <Stack.Screen name="InputFomik" component={InputFomik} />
                <Stack.Screen name="T" component={T} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}