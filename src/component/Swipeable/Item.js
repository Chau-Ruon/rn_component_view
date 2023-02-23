import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
} from 'react-native'
import React from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { SIZE } from '../../theme';

const Item = ({item,index}) => {
  console.log('item: ', item);

  const RenderRight = (progress, dragX) => {
    console.log('progress: ', progress);
    console.log('dragX: ', dragX);
    const scale = dragX.interpolate({
      inputRange: [-50, 0.5],
      outputRange: [1, 0.1]
    })
  
    const Style = {
      transform : [
        {
          scale
        }
      ]
    }
  
    return (
      <View style={{width: 80, backgroundColor: 'red', alignItems: "center", justifyContent: 'center'}}>
        <Animated.Text style={[Style, {color: '#fff', fontWeight: "600"}]}>Delete</Animated.Text>
      </View>
    )
  }

  return (
    <Swipeable 
      overshootRight={false} 
      renderRightActions={RenderRight}
    >
      <View style={{
        flexDirection:"row",
        backgroundColor:"#c0c0c0",
        width:SIZE.width,
        marginBottom:5,
      }}>
        <Image style={{height:60,width:60}} source={item.image}/>
        <Text>{item.title}</Text>
      </View>
    </Swipeable>
  )
}

export default Item

const styles = StyleSheet.create({})