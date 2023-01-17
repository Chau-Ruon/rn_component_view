import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React from 'react'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { SIZE } from '../../theme';


interface PageProps {
  index: number;
  translateX: Animated.SharedValue<number>;
  title: string;
}
const SIZEs = SIZE.width * 0.7;

const ItemScrollView = ({
  index,
  translateX,
  title,
}: PageProps) => {
  const inputRange = [(-index - 1) * SIZE.width, index * SIZE.width, (index + 1) * SIZE.width];

  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [0, SIZEs / 2, 0],
      Extrapolate.CLAMP
    );

    return {
      borderRadius,
      transform: [{ scale }],
    };
  });

  const rTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      inputRange,
      [SIZE.height / 2, 0, -SIZE.height / 2],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-2, 1, -2],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [{ translateY: translateY }],
    };
  });

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: `rgba(0,0,256, 0.${index + 2})` },
      ]}
    >
      <Animated.View style={[styles.square, rStyle]} />
      <Animated.View style={[styles.textContainer, rTextStyle]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </View>
  );
}

export default ItemScrollView

const styles = StyleSheet.create({
  container: {
    width: SIZE.width,
    height: SIZE.height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: SIZEs,
    height: SIZEs,
    backgroundColor: 'rgba(0, 0, 256, 0.4)',
  },
  text: {
    fontSize: 60,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  textContainer: { position: 'absolute' },
})