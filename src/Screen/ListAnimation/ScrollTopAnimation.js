import React,{useState, useEffect, useMemo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { SIZE,COLOR,TEXT,SHADOWS } from '../../theme';

const ScrollExample = () => {
  const data = new Array(40).fill().map((ele,index) => ({id: index, name: `Item name ${index}`}));

  const translationY = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const listVisibility = useSharedValue(1);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      translationY.value = event.contentOffset.y;
      listVisibility.value = withTiming(0,{damping:10});
    },
    onBeginDrag: (event) => {
      isScrolling.value = true;
    },
    onEndDrag: (event) => {
      console.log('event: ', event);
      isScrolling.value = false;
      if (event.contentOffset.y > 0) {
        
        listVisibility.value = withSpring(1,{damping:10});
      }
    },
  });

  const stylez = useAnimatedStyle(() => {
    return {
      opacity: listVisibility.value,
      // transform: [
      //   {
      //     translateY: translationY.value,
      //   },
      // ],
    };
  });

  console.log('listVisibility: ', listVisibility);


  return (
    <View style={{}}>
      <Animated.ScrollView
        // style={stylez}
        onScroll={scrollHandler}
        scrollEventThrottle={1}
        onScrollAnimationEnd
        >
        {data.map((ele, index) => {
          return (
            <Animated.View style={[stylez,{
              backgroundColor:"#b80000",
              height: 61,
              width:SIZE.width - 15,
              borderRadius:10,
              alignItems:"center",
              justifyContent:"center",
              marginVertical:1,
            }]}>
              <Text style={{fontSize:25,fontWeight:"bold"}}>{ele.name}</Text>
            </Animated.View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
}

export default ScrollExample;

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