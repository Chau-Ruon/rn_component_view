import React,{useState, useEffect, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
  withTiming,
  Extrapolate,
  useDerivedValue,
} from "react-native-reanimated";
import { SIZE,COLOR,TEXT,SHADOWS } from "../../theme";

export const NOTIFICATION_HEIGHT = 80;

const ItemScrollTopAnimation = (
  data,
  index,
  listVisibility,
  scrollY,
  footerHeight,
  ) => {

    const containerHeight = useDerivedValue(
      () => SIZE.height - 250 - footerHeight.value
    );
    const startPosition = NOTIFICATION_HEIGHT * index;
  
    const animatedStyle = useAnimatedStyle(() => {
      const pos1 = startPosition - containerHeight.value;
      const pos2 = startPosition + NOTIFICATION_HEIGHT - containerHeight.value;
  
      if (listVisibility.value >= 1) {
        // we are animating the last visible item
        return {
          opacity: interpolate(scrollY.value, [pos1, pos2], [0, 1]),
          transform: [
            {
              translateY: interpolate(
                scrollY.value,
                [pos1, pos2],
                [-NOTIFICATION_HEIGHT / 2, 0],
                Extrapolate.CLAMP
              ),
            },
            {
              scale: interpolate(
                scrollY.value,
                [pos1, pos2],
                [0.8, 1],
                Extrapolate.CLAMP
              ),
            },
          ],
        };
      } else {
        // animate all items to hide them
        return {
          transform: [
            {
              translateY: interpolate(
                listVisibility.value,
                [0, 1],
                [containerHeight.value - startPosition, 0]
              ),
            },
            {
              scale: interpolate(listVisibility.value, [0, 1], [0.5, 1]),
            },
          ],
          opacity: listVisibility.value,
        };
      }
    });

    console.log("🚀 ~ file: ItemScrollTopAnimation.js:34 ~ animatedStyle ~ animatedStyle", animatedStyle)

    return (
      <Animated.View style={animatedStyle}>
        <Text style={styles.itemName}>{data.name}</Text>
      </Animated.View>
    )
}

export default ItemScrollTopAnimation

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