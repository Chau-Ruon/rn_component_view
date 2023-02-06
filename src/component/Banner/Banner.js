import React,{useState,useRef,useEffect,useMemo} from 'react';
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
import Swiper from 'react-native-swiper'

import { food1, food2, food3, food4, food5 } from '../../assets/indexImage';
import { COLOR, SIZE } from '../../theme';

const Banner = (props) => {
  const {
    data,
    heightImage,
    height,
    heightBanner,
    ImageBannerStyle,
    imageBelowStyle,
  } = props;

  const arrImage = [
    food1,
    food2,
    food3,
    food4,
    food5,
  ]
  let stepCarousel = useRef(null);
  const  stepImage = useRef(0);
  let currentOffset = 0;
  const [imageIndex,setImageIndex] = useState(0);
  const [changedViewableItems,setChangedViewableItems] = useState([])

  const handles = (e) => {
    if (!e) return;
    const { nativeEvent } = e;
    if (nativeEvent && nativeEvent.contentOffset) {
      currentOffset = nativeEvent.contentOffset.x;
      if (currentOffset > 0) {
        setImageIndex(Math.floor((currentOffset + SIZE.width / 2) / SIZE.width ))
      }
    }
  }
  const changeIndex =(index= 0) => {
    stepCarousel?.current?.scrollToIndex({ index: index, animted: true,viewOffset: imageIndex, viewPosition: currentOffset});
  }
  const styles = styleWithProps( );
  return (
    <View style={{height:SIZE.height/2.9 || height,}}>
      <FlatList 
        data={data}
        horizontal
        pagingEnabled
        ref={stepCarousel}
        onScroll={handles}
        scrollEventThrottle={16}
        keyExtractor={index => index.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>{
          return(
            <View style={[ImageBannerStyle,{height: heightBanner ||  200,width:SIZE.width,}]}>
              <Image style={{height: heightBanner || 200, width:SIZE.width, resizeMode:"contain",}} source={item}/>
            </View>
          );
        }}
      />
      <FlatList 
        data={data}
        horizontal
        keyExtractor={index => index.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index}) => {
          return(
            <View style={[styles.imageItem,{ height: 60 || heightImage,}]}>
              <TouchableOpacity onPress={() => changeIndex(index)}>
                <Image 
                  style={  (imageIndex ||0) === index  ?
                    [styles.unActiveBtnItemImg,{borderColor: COLOR.error,...imageBelowStyle,} ] 
                  :
                    styles.unActiveBtnItemImg} source={item}/>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  )
}

export default Banner


const styleWithProps = () => {
  return StyleSheet.create({
    containerItem:{
      height:SIZE.height / 4,
      width:SIZE.width,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems:"center",
      backgroundColor:"red"
    },
    imageItem:{
      marginTop:5,
      height: 60 ,
    },
    unActiveBtnItemImg:{
      borderWidth:1,
      borderRadius:10,
      marginLeft:5,
      // top:10,
      height:60,
      width:60,
      justifyContent:"center",
      alignItems:"center",
      // ...StyleSheet.absoluteFillObject,
    },
  
  });
};
