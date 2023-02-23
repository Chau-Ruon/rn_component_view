import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import Item from './Item'

import {food1,food2,
  food3,
  food4,
  food5,} from "../../assets/indexImage"

export const Data = [
  {
    id:1,
    title:"sdfjkash",
    image: food1,
  },
  {
    id:2,
    title:"sdfjkash",
    image: food2,
  },
  {
    id:3,
    title:"sdfjkash",
    image: food3,
  },
  {
    id:4,
    title:"sdfjkash",
    image: food4,
  },
  {
    id:5,
    title:"sdfjkash",
    image: food5,
  },
  {
    id:6,
    title:"sdfjkash",
    image: food5,
  },
  {
    id:7,
    title:"sdfjkash",
    image: food5,
  },
  {
    id:8,
    title:"sdfjkash",
    image: food5,
  },
  {
    id:9,
    title:"sdfjkash",
    image: food5,
  },
  {
    id:10,
    title:"sdfjkash",
    image: food5,
  }, {
    id:11,
    title:"sdfjkash",
    image: food5,
  },
  {
    id:12,
    title:"sdfjkash",
    image: food5,
  },
  {
    id:13,
    title:"sdfjkash",
    image: food5,
  },
  {
    id:14,
    title:"sdfjkash",
    image: food5,
  },
  {
    id:15,
    title:"sdfjkash",
    image: food5,
  },
  {
    id:16,
    title:"sdfjkash",
    image: food5,
  },
  {
    id:17,
    title:"sdfjkash",
    image: food5,
  },
]

const SwipeableList = () => {
  return (
    <View style={{flex:1}}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item,index}) =>{
          return <Item item={item} index={index} />
        } 
        }
      />
    </View>
  )
}

export default SwipeableList

const styles = StyleSheet.create({})