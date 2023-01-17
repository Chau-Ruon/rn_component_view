import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native'
import React from 'react'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import ItemScrollView from '../../component/ListAnim/ItemScrollView';

const WORDS = ["What's", 'up', 'mobile', 'devs?'];


const ScrollViewAnimation = () => {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      pagingEnabled
      scrollEventThrottle={16}
      horizontal
      style={styles.container}
    >
      {WORDS.map((title, index) => {
        return (
          <ItemScrollView
            key={index.toString()}
            title={title}
            translateX={translateX}
            index={index}
          />
        );
      })}
    </Animated.ScrollView>
  );
}

export default ScrollViewAnimation

const styles = StyleSheet.create({
  container:{

  }
})