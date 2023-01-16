import {
  StyleSheet,
  Text,
  FlatList,
  View,
} from 'react-native'
import React,{useState, useEffect, useMemo} from 'react';
import { SIZE,COLOR,TEXT,SHADOWS } from '../../theme';
import Animated, {
  event,
  SlideInDown,
  SlideInUp,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  useDerivedValue,
  useAnimatedGestureHandler,
  withTiming,
  Easing,
  useAnimatedProps,
  useAnimatedScrollHandler,
  withSpring,
  Extrapolate,
} from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ItemScrollTopAnimation from '../../component/ListAnim/ItemScrollTopAnimation';

let data = [];
for (let index = 0; index < 50; index++) {
  const item = {
    id: index,
    name: `Item index ${index}!`
  }
  data.push(item);
}

export const NOTIFICATION_HEIGHT = 80;

const ScrollTopAnimation = () => {

  const footerVisibility = useSharedValue(1);
  const scrollY = useSharedValue(0);
  const listVisibility = useSharedValue(1);

  const footerHeight = useDerivedValue(() =>
    interpolate(footerVisibility.value, [0, 1], [0, 85])
  );

  const animatedFooterStyle = useAnimatedStyle(() => ({
    marginTop: interpolate(footerVisibility.value, [0, 1], [-85, 0]),
    opacity: footerVisibility.value,
  }));

  const handler = useAnimatedScrollHandler({
    onScroll:(event) => {
      const y = event.contentOffset.y;
      scrollY.value = y;

      if (y < 10) {
        footerVisibility.value = withTiming(1);
      }else{
        footerVisibility.value = withTiming(0);
      }
    },
    onBeginDrag: (event) => {
      if (listVisibility.value < 1) {
        listVisibility.value = withSpring(1);
      }
    },
    onEndDrag: (event) => {
      if (event.contentOffset.y < 0) {
        listVisibility.value = withTiming(0);
      }
    },
  });

  return (
    <GestureHandlerRootView>
      <Animated.FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={({ item, index }) => ItemScrollTopAnimation(
          item,
          index,
          listVisibility,
          scrollY,
          footerHeight)
        }
        
        onScroll={handler}
        scrollEventThrottle={12}
      />
    </GestureHandlerRootView>
  )
}

export default ScrollTopAnimation

const styles = StyleSheet.create({
  container:{
    width: SIZE.width,
    backgroundColor:"#673AB7",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginVertical:1,
    height:50,
  },
  itemName:{
    fontSize:20,
    fontWeight:"bold"
  },
})