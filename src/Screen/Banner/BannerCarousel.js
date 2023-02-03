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

const BannerCarousel = () => {
  const arrImage = [
    food1,
    food2,
    food3,
    food4,
    food5,
  ]
  let stepCarousel = useRef(null);
  let stepImage = useRef(null);
  let currentOffset = 0;
  const [imageIndex,setImageIndex] = useState(0);
  const [changedViewableItems,setChangedViewableItems] = useState([])
  // console.log("🚀 ~ file: BannerCarousel.js:30 ~ BannerCarousel ~ imageIndex", imageIndex)
  
  let adfjhadk = 0;
  useEffect(()=>{
    // currentIndexImage();
    // changeIndex();
  },[])
  
  const handles = (e) => {
    if (!e) return;
    const { nativeEvent } = e;
    if (nativeEvent && nativeEvent.contentOffset) {
      currentOffset = nativeEvent.contentOffset.x;
      console.log('currentOffset: ', currentOffset);
      if (currentOffset > 0) {
        // console.log('Math.floor((currentOffset + SIZE.height / 2) / SIZE.width): ', Math.floor((currentOffset + SIZE.height / 2) / SIZE.width));
        console.log('(currentOffset + SIZE.height / 2) / SIZE.width): ', (currentOffset + SIZE.width / 2) / SIZE.width - SIZE.width);
        // console.log('SIZE.width: ', SIZE.width);
        // console.log('currentOffset + SIZE.height / 2: ', currentOffset + SIZE.height / 2);
        const current = Math.floor((currentOffset + SIZE.height / 2) / SIZE.width );
        // console.log("🚀 ~ file: BannerCarousel.js:48 ~ handles ~ current", current)
        setImageIndex(current)
        // setImageIndex(Math.floor((currentOffset + SIZE.height / 2) / SIZE.width));
      }
    }
  }
  
  
  // const [Viewable, SetViewable] = React.useState([]);
  
  const onViewRef = React.useRef(({viewableItems,changed}) => {
    let Check = [];
    for (var i = 0; i < viewableItems.length; i++) {
      Check.push(viewableItems[i].item);
    }
    // console.log('viewableItems: ', viewableItems);
    setChangedViewableItems(changed)
    console.log('changed: ', changed);
    console.log('Check: ', Check);
  });
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 80 });
  
  const changeIndex =(index= 0) => {
    stepCarousel?.current?.scrollToIndex({ index: index, animted: true,viewOffset: imageIndex, viewPosition: currentOffset});
  }








  console.log('current: ', stepImage?.current);
  const styles = styleWithProps( );
  return (
    <View style={{height:SIZE.height/2.9,backgroundColor:"#0ec368"}}>
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
        // extraData={selectedId}
        // onViewableItemsChanged={onViewRef.current}
        // viewabilityConfig={viewConfigRef.current}

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
        renderItem={({item,index}) => {
          // console.log(`::::::::::::`, stepImage?.current);
          // let step = stepImage?.current === null ? 0 : stepImage?.current; 
          return(
            <View style={{marginTop:5,height: 60,}}>
              <TouchableOpacity onPress={() => changeIndex(index)}>
                <Image style={  (imageIndex ||0) === index  ? [styles.unActiveBtnItemImg,{borderColor:COLOR.error} ] : styles.unActiveBtnItemImg} source={item}/>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  )
}

export default BannerCarousel


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
    },
  
  });
};
