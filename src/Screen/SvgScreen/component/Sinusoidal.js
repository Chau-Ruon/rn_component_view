import React,{useState,useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';


const dxy ={
  d:[
    "M 0 0",
    "H 180",
    "C 164 56 56 20 56 9",
    // "V 56",
    // "C 154 5 6 7 8 9",
    // "C 154 565 0 7 8 9",
    // "C 154 5 0 7 8 9",
    // "V 56",
    "H 0",
  ].join(" "),
}

const Sinusoidal = () => {
  return (
    <View style={[StyleSheet.absoluteFill,{ alignItems: 'center', justifyContent: 'center',backgroundColor:'rgba(123,220,181,0.43)' },]}>
      <Svg height="200" width="200" fill={"#b80000"} stroke="#b80000">
        <Path
          d={dxy.d}
          fill="none"
          // strokeLinecap="round"
          // strokeLinejoin="round"

          stroke="red"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({})

export default Sinusoidal;
