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
import { SIZE } from '../../theme'

export const data = [
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
]
const handleDelete = id => {
  console.log('id: ', id);
  const newData = data.filter(item => item.id !== id);
  setData(newData);
};

const renderItem = ({ item,index }) => (
  <Item itemlist={item}index={index} onDelete={() => handleDelete(item.id)} />
);


const SwipeableList = () => {
  return (
    <View style={{width:SIZE.width}}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  )
}

export default SwipeableList

const styles = StyleSheet.create({})