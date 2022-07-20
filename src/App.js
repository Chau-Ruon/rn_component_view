import { 
    View,
    Text,
} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from "./Screen/HomeScreen";
import CheckboxScreen from './Screen/Checkbox/CheckboxScreen'

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
            </Stack.Navigator>
        </NavigationContainer>
    )
}