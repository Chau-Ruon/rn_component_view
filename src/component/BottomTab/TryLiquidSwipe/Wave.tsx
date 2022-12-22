import React,{ReactElement, ReactNode} from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { SlideProps } from './Slide';
import MaskedView from '@react-native-masked-view/masked-view';
import Svg,{Path} from "react-native-svg"
import Animated, { useAnimatedProps } from 'react-native-reanimated';
import { Vector } from 'react-native-redash';

export const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");
export const MIN_LEDGE = 25;
export const MARGIN_WIDTH = MIN_LEDGE + 50;
const AnimatedPath = Animated.createAnimatedComponent(Path);

export enum Side {
  LEFT,
  RIGHT,
  NONE,
}
interface WaveProps {
  side: Side;
  children: ReactNode;
  position: Vector<Animated.SharedValue<number>>;
}

const Wave = ({
  side,
  children,
  position,
}: WaveProps) => {
  const animatedProps = useAnimatedProps(()=>{
    const d = [
      "M 0 0",
      `H ${position.x.value}`,
      `V ${HEIGHT}`,
      `H 0`,
      `Z`,
    ];
    return {
      d: d.join(" "),
    }
  })
  const maskElement = (
    <Svg style={[StyleSheet.absoluteFill,{
      transform:[{rotateY: side === Side.RIGHT ? "180deg" : "0deg"}],
    }]}>
      <AnimatedPath animatedProps={animatedProps} fill="black"/>
    </Svg>
  );

  return (
    <MaskedView style={StyleSheet.absoluteFill} maskElement={maskElement}>
      {children}
    </MaskedView>
  );
};

export default Wave;

const styles = StyleSheet.create({
  container: {}
});
