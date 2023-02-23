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

import BottomTab from './Screen/BottomTab/component/BottomTabScreen';
import IndexBottomTab from "./Screen/BottomTab/index";
import TBottomTabScreen from './Screen/BottomTab/component/TBottomTabScreen';
import Modals from './Screen/Modals/Index';
import {Loading} from './Screen/Loading/Loading';
import {LoadingDots, OrtherLoading, Thu} from './component/Loading/index';

import {BottomSheetHome} from './Screen/BottomSheet/BottomSheetHome';
import GestureHandler from './Screen/BottomSheet/GestureHandler';
import OrtherBottomSheet from './Screen/BottomSheet/OrtherBottomSheet';
import {ComponentOrtherBottomSheet} from './component/BottomSheet/index';
import LightBox from './component/Modal/LightBox';
import LightBoxScreen from './Screen/Modals/LightBoxScreen';
import DashedCard from './component/Card/DashedCard';
import IndexCard from './Screen/Card/IndexCard';
import TicketCard from './component/Card/TicketCard';

import Rate from './Screen/Rating/index';
import Custom from './Screen/Rating/Custom';

import HeaderTab from './component/HeaderTopTab/HeaderTab';
import HeaderTop from './Screen/Header/index';
import LiquidNavigation from './Screen/BottomTab/component/LiquidNavigation';
import LiquidSwipe from './Screen/BottomTab/component/LiquidSwipe';
import TryLiquidSwipe from './Screen/BottomTab/component/TryLiquidSwipe';

import Svg from "./Screen/SvgScreen/Index";
import Sinusoidal from './Screen/SvgScreen/component/Sinusoidal';
import MakerMap from './Screen/SvgScreen/component/MakerMap';

import HeadBubbleChat from "./Screen/ChatHeadBubble/index";
import { BubbleChat } from './component/ChatHeadBubble';

import ScrollTopAnimation from './Screen/ListAnimation/ScrollTopAnimation';
import IndexListAnim from './Screen/ListAnimation';
import FlatlistAnimation from './Screen/ListAnimation/FlatlistAnimation';
import ScrollViewAnimation from './Screen/ListAnimation/ScrollViewAnimation';
import SwitchAnim from './Screen/ListAnimation/SwitchAnim';
import PinchGestureAnimation from './Screen/ListAnimation/PinchGestureAnimation';
import IndexBanner from './Screen/Banner';
import BannerCarousel from './Screen/Banner/BannerCarousel';

import Swipeable from "./Screen/Swipeable/index"
import SwipeableList from './component/Swipeable/SwipeableList';


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
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={screenOptions}/>

        {/* Checkbox */}
        <Stack.Screen name="Checkbox" component={IndexScreen} />
        <Stack.Screen name="TCheckbox" component={TCheckbox} />
        <Stack.Screen name="CheckboxItems" component={Checkbox} />
        <Stack.Screen name="CheckboxArray" component={CheckboxArray} />

        {/* List */}
        <Stack.Screen name="InputFlatlist" component={InputFlatlistScreen} />
        <Stack.Screen name="InputFomik" component={InputFomik} />
        <Stack.Screen name="FlexComponent" component={FlexComponent} />

        {/* Map */}
        <Stack.Screen name="MapView" component={MapView} options={optionsView('Map View')}/>

        {/* Alert */}
        <Stack.Screen name="ShowAlert" component={ShowAlert} options={optionsView('Show Alert')}/>

        {/* HeaderTop */}
        <Stack.Screen name="HeaderTop" component={HeaderTop} options={optionsView('Header Top')}/>
        <Stack.Screen name="HeaderTab" component={HeaderTab} options={optionsView('HeaderTab')}/>

        {/* Loading */}
        <Stack.Screen name="Loading" component={Loading} options={optionsView('Loading')}/>
        <Stack.Screen name="LoadingDots" component={LoadingDots} options={optionsView('Loading')}/>
        <Stack.Screen name="OrtherLoading" component={OrtherLoading} options={optionsView('Orther Loading Dots')}/>

        {/* Bottom Sheet */}
        <Stack.Screen name="BottomSheetHome" component={BottomSheetHome} options={optionsView('Bottom Sheet Home')}/>
        <Stack.Screen name="GestureHandler" component={GestureHandler} />
        <Stack.Screen name="OrtherBottomSheet" component={ComponentOrtherBottomSheet}/>
        <Stack.Screen name="DraggableBottomView" component={OrtherBottomSheet}/>

        {/* Bottom Tab */}
        <Stack.Screen name="IndexBottomTab" component={IndexBottomTab} options={optionsView('BottomTab')} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="TBottomTabScreen" component={TBottomTabScreen} />
        <Stack.Screen name="LiquidNavigation" component={LiquidNavigation} options={screenOptions} />
        <Stack.Screen name="LiquidSwipe" component={LiquidSwipe} options={screenOptions} />
        <Stack.Screen name="TryLiquidSwipe" component={TryLiquidSwipe} options={screenOptions} />
        
        

        {/* Modals */}
        <Stack.Screen name="Modals" component={Modals} options={optionsView('Modals')}/>
        <Stack.Screen name="LightBoxScreen" component={LightBoxScreen} options={screenOptions}/>
        
        {/* Rate */}
        <Stack.Screen name="Rate" component={Rate} options={optionsView('Rate')}/>
        <Stack.Screen name="Rating" component={Custom} />

        {/* SVG */}
        <Stack.Screen name="Svg" component={Svg} options={optionsView('SVG')}/>
        <Stack.Screen name="Sinusoidal" component={Sinusoidal} options={optionsView('Hình Sin')}/>
        <Stack.Screen name="MakerMap" component={MakerMap} options={optionsView('Hình Vị trí')}/>
        
        {/* Head Bubble Chat */}
        <Stack.Screen name="HeadBubbleChat" component={HeadBubbleChat} options={optionsView('Bong Bong Chat')}/>
        <Stack.Screen name="BubbleChat" component={BubbleChat} options={optionsView('BubbleChat')}/>

        {/* List Animation */}
        <Stack.Screen name="ListAnimation" component={IndexListAnim} options={optionsView('List Animation')}/>
        <Stack.Screen name="ScrollTopAnimation" component={ScrollTopAnimation} options={optionsView('Scroll Top Animation')}/>
        <Stack.Screen name="FlatlistAnimation" component={FlatlistAnimation} options={optionsView('Flatlist Animation')}/>
        <Stack.Screen name="ScrollViewAnimation" component={ScrollViewAnimation} options={optionsView('ScrollView Animation')}/>
        <Stack.Screen name="SwitchAnimation" component={SwitchAnim} options={optionsView('Switch Animation')}/>
        <Stack.Screen name="PinchGestureAnimation" component={PinchGestureAnimation} options={optionsView('Pinch Gesture Animation')}/>


        {/* Banner Header */}
        <Stack.Screen name="IndexBanner" component={IndexBanner} options={optionsView('Banner')}/>
        <Stack.Screen name="BannerCarousel" component={BannerCarousel} options={screenOptions}/>

        {/* Swipeable */}
        <Stack.Screen name="Swipeable" component={Swipeable} options={optionsView('Swipeable')}/>
        <Stack.Screen name="SwipeableList" component={SwipeableList} options={optionsView('SwipeableList')}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};
