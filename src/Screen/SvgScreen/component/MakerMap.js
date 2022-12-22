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


const MakerMap = () => {
  return (
    <View style={[StyleSheet.absoluteFill,{ alignItems: 'center', justifyContent: 'center' },]}>
      {/* <Svg height="50%" width="50%" viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="blue"
          strokeWidth="2.5"
          fill="green"
        />
        <Rect
          x="15"
          y="-31"
          width="70"
          height="70"
          stroke="red"
          strokeWidth="2"
          fill="yellow"
        />
      </Svg> */}




      {/* <Svg
        width="130"
        height="130"
        fill="blue"
        stroke="red"
        color="green"
        viewBox="-16 -16 544 544"
      >
        <Path
          d="M318.37,85.45L422.53,190.11,158.89,455,54.79,350.38ZM501.56,60.2L455.11,13.53a45.93,45.93,0,0,0-65.11,0L345.51,58.24,449.66,162.9l51.9-52.15A35.8,35.8,0,0,0,501.56,60.2ZM0.29,497.49a11.88,11.88,0,0,0,14.34,14.17l116.06-28.28L26.59,378.72Z"
          strokeWidth="32"
        />
        <Path d="M0,0L512,512" stroke="currentColor" strokeWidth="32" />
      </Svg> */}


      <Svg height="300" width="300">
        <Defs>
          <G id="shape" >
            <G>
              {/* <Rect x="0" y="0" width="100" height="200" fill={"rgba(142,209,252,1)"}/> */}
              <Circle cx="50" cy="50" r="50" fill={"#FF8A65"}/>
              {/* <Line x1="50" y1="0" x2="50" y2="900" stroke="#060" /> */}
              {/* <Rect x="70" y="0" rotation={"45"} width="50" height="50" fill={"rgba(5,1,0,1)"} /> */}
              <Rect x="70.5" y="0" rotation={"45"} width="50" height="50" fill={"#FF8A65"} />
              <Circle cx="50" cy="50" r="25" fill="blue" />
              {/* <Circle cx="50" cy="150" r="50" fill={"rgba(156,39,176,0.22)"}/>
              <Circle cx="50" cy="150" r="3" fill="blue" /> */}
            </G>
          </G>
        </Defs>
        <Use href="#shape" x="20" y="0"  fill={"#CDDC39"}/>
        <Use href="#shape" x="170" y="0"/>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({})

export default MakerMap;
