import React,{useState,useRef,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
  ScrollView,
} from 'react-native'
import Carousel from 'react-native-reanimated-carousel';
import Swiper from 'react-native-swiper'

import { food1, food2, food3, food4, food5 } from '../../assets/indexImage';
import { COLOR, SIZE } from '../../theme';

const BannerCarousel = () => {
  const arrImage = [
    food1,
    food2,
    food3,
    food4,
    food5,
  ]
  const [bannerIndex,setBannerIndex] = useState(0);
  const [currentIndex,setCurrentIndex] = useState(0);
  const stepCarousel = useRef(null);


  useEffect(() => {
    if (arrImage.length > 0) {
      let index = 0;
      // setInterval(()=>{
      //   stepCarousel.current.scrollTo({x: index * SIZE.width, y: 0, animted: true});
      //   index += 1;
      //   if (index === arrImage.length) {
      //     index = 0;
      //   }
      // },3000)
    }
  }, []);

  const handles = (e) => {
    if (!e) return;

    const { nativeEvent } = e;
    if (nativeEvent && nativeEvent.contentOffset) {
      const currentOffset = nativeEvent.contentOffset.x;
      let imageIndex = 0;
      if (currentOffset > 0) {
        imageIndex = Math.floor((currentOffset + SIZE.height / 2) / SIZE.width);
      }
      setBannerIndex(imageIndex);
    }
  }

  return (
    <View>
      <View style={{
        height:SIZE.height/2.9,
        // backgroundColor:"#0693E3",
      }}>

        {/* <ScrollView horizontal scrollEnabled={false} showsHorizontalScrollIndicator={true}>
          {arrImage.map ((image, i) => renderItem(image,i))}
        </ScrollView>*/}


        <FlatList 
          data={arrImage}
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
              <View style={{height:200,width:SIZE.width,}}>
                <Image style={{height:200,width:SIZE.width,resizeMode:"contain",}} source={item}/>
              </View>
            );
          }}
        />
        <FlatList 
          data={arrImage}
          horizontal
          keyExtractor={index => index.toString()}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item,index})=>{
            return(
              <View style={{
                marginTop:5,
                height: 60,
                // width:SIZE.width,
                // backgroundColor:"#2a9d64",
              }}>
                <TouchableOpacity 
                // onPress={changeIndex(index)}
                >
                  <Image style={styles.unActiveBtnItemImg} source={item}/>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  )
}

export default BannerCarousel

const styles = StyleSheet.create({
  containerItem:{
    height:SIZE.height / 4,
    width:SIZE.width,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems:"center",
    backgroundColor:"red"
  },
  iamgeItem:{
    width: SIZE.width,
    height:"100%"
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
    borderColor:COLOR.error,
  },



  wrapper: {
    height: SIZE.height/4,
    backgroundColor:"#00DD00"
  },
})