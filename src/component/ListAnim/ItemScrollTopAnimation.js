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

const ItemScrollTopAnimation = (data) => {

  return (
    <Animated.View style={{}}>
      <View style={{
        width: SIZE.width -15,
        height:61,
        borderRadius:8,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#7bdcb5",
        marginVertical:1,
      }}>
        <Text style={styles.itemName}>{data.data.name}</Text>
      </View>
    </Animated.View>
  );
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