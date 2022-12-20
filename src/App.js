import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {HomeScreen} from './Screen/HomeScreen';
import {TCheckbox, Checkbox, CheckboxArray} from './component/Checkbox/index';
import {IndexScreen} from './Screen/Checkbox/IndexScreen';
import InputFlatlistScreen from './Screen/InputFlatlistScreen/InputFlatlistScreen';
import InputFomik from './Screen/InputFlatlistScreen/InputFomik';
import FlexComponent from './Screen/Flex/FlexComponent';

import MapView from './Screen/MapView/index';
import ShowAlert from './Screen/Alert/index';

import BottomTabScreen from './Screen/BottomTab/BottomTabScreen';
import TBottomTabScreen from './Screen/BottomTab/TBottomTabScreen';
import Modals from './Screen/Modals/Index';
import {Loading} from './Screen/Loading/Loading';
import {LoadingDots, OrtherLoading, Thu} from './component/Loading/index';

import {BottomSheetHome} from './Screen/BottomSheet/BottomSheetHome';
import GestureHandler from './Screen/BottomSheet/GestureHandler';
import OrtherBottomSheet from './Screen/BottomSheet/OrtherBottomSheet';
import {ComponentOrtherBottomSheet} from './component/BottomSheet/index';
import LightBox from './component/Modal/LightBox';
import LightBoxScreen from './Screen/Modals/LightBoxScreen';

import Rate from './Screen/Rating/index';
import Custom from './Screen/Rating/Custom';

import HeaderTab from './component/HeaderTopTab/HeaderTab';
import HeaderTop from './Screen/Header/index';

const screenOptions = {
  headerTransparent: true,
  headerShown: false,
};

const optionsView = title => {
  return {
    title: title,
    contentStyle: {
      alignItems: 'center',
    },
    headerTitleAlign: 'center',
  };
};

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={screenOptions}
        />
        {/* Checkbox */}
        <Stack.Screen name="Checkbox" component={IndexScreen} />
        <Stack.Screen name="TCheckbox" component={TCheckbox} />
        <Stack.Screen name="CheckboxItems" component={Checkbox} />
        <Stack.Screen name="CheckboxArray" component={CheckboxArray} />
        <Stack.Screen name="InputFlatlist" component={InputFlatlistScreen} />
        <Stack.Screen name="InputFomik" component={InputFomik} />
        <Stack.Screen name="FlexComponent" component={FlexComponent} />
        <Stack.Screen
          name="MapView"
          component={MapView}
          options={optionsView('Map View')}
        />
        <Stack.Screen
          name="ShowAlert"
          component={ShowAlert}
          options={optionsView('Show Alert')}
        />
        {/* HeaderTop */}
        <Stack.Screen
          name="HeaderTop"
          component={HeaderTop}
          options={optionsView('Header Top')}
        />
        <Stack.Screen
          name="HeaderTab"
          component={HeaderTab}
          options={optionsView('HeaderTab')}
        />
        {/* Loading */}
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={optionsView('Loading')}
        />
        <Stack.Screen
          name="LoadingDots"
          component={LoadingDots}
          options={optionsView('Loading')}
        />
        <Stack.Screen
          name="OrtherLoading"
          component={OrtherLoading}
          options={optionsView('Orther Loading Dots')}
        />
        {/* Bottom Sheet */}
        <Stack.Screen
          name="BottomSheetHome"
          component={BottomSheetHome}
          options={optionsView('Bottom Sheet Home')}
        />
        <Stack.Screen name="GestureHandler" component={GestureHandler} />
        <Stack.Screen
          name="OrtherBottomSheet"
          component={ComponentOrtherBottomSheet}
        />
        <Stack.Screen
          name="DraggableBottomView"
          component={OrtherBottomSheet}
        />
        {/* Bottom Tab */}
        <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
        <Stack.Screen name="TBottomTabScreen" component={TBottomTabScreen} />
        {/* Modals */}
        <Stack.Screen
          name="Modals"
          component={Modals}
          options={optionsView('Modals')}
        />
        <Stack.Screen
          name="LightBoxScreen"
          component={LightBoxScreen}
          options={screenOptions}
        />
        {/* Rate */}
        <Stack.Screen
          name="Rate"
          component={Rate}
          options={optionsView('Rate')}
        />
        <Stack.Screen name="Rating" component={Custom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
