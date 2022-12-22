import React,{ReactElement, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Wave,{HEIGHT,MARGIN_WIDTH,Side,WIDTH} from './Wave';
import { SlideProps } from './Slide';
import Botton from "./Button";
import {PanGestureHandler} from "react-native-gesture-handler";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { snapPoint, useVector } from "react-native-redash";







interface SliderProps {
  index: number;
  setIndex: (value: number) => void;
  children: ReactElement<SlideProps>;
  prev?: ReactElement<SlideProps>;
  next?: ReactElement<SlideProps>;
}

const Slider = ({
  index,
  setIndex,
  children: current,
  prev,
  next,
}: SliderProps) => {
  const hasPrev = !!prev;
  const hasNext = !!next;
  const activeSide = useSharedValue(Side.NONE);
  const x = useSharedValue(0);
  const left = useVector();
  const right = useVector();
  const gestureHandler = useAnimatedGestureHandler({
    onStart(event, context) {
      console.log('context: ', context);
      // context.translateX = x.value;
    },
    onActive(event, context) {
      console.log('context: ', context);
    },
    onCancel(event, context) {
      console.log('context: ', context);
    },
  });


  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value,
        },
      ],
    };
  });

  useEffect(() => {
    left.x.value = withSpring(MARGIN_WIDTH);
    right.x.value = withSpring(MARGIN_WIDTH);
  }, [])

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[StyleSheet.absoluteFill,animatedStyle]}>
        {current}
        { prev && (
          <View style={StyleSheet.absoluteFill}>
            <Wave side={Side.LEFT} position={left}>{prev}</Wave>
          </View>
        )}
        { next && (
          <View style={StyleSheet.absoluteFill}>
            <Wave side={Side.RIGHT} position={right}>{next}</Wave>
          </View>
        )}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {}
});
