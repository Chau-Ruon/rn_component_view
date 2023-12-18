import React, {useState, useRef, useEffect, useMemo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Swiper from 'react-native-swiper';

import { food1, food2, food3, food4, food5 } from '../../assets/indexImage';
import Banner from '../../component/Banner/Banner';
import { COLOR, SIZE } from '../../theme';

const BannerCarousel = (props) => {
  const arrImage = [
    food1,
    food2,
    food3,
    food4,
    food5,
  ]

  const styles = styleWithProps( );
  return (
    <View>
      <Banner
        data={arrImage}
        heightImage={90}
        imageBelowStyle={styles.imageItem}
      />
    </View>
  );
};

export default BannerCarousel;

const styleWithProps = () => {
  return StyleSheet.create({
    imageItem:{
      height: 60,
      borderColor:"#137443"
    },
  });
};
