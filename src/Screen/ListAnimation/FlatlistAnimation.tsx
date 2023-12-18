import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ViewToken,
} from 'react-native'
import React,{useEffect,useState} from 'react'
import Animated,{
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import ItemFlatlist from '../../component/ListAnim/ItemFlatlist'
import { SIZE } from '../../theme'
const FlatlistAnimation = () => {
  const data = new Array(20).fill(0).map((_, index) => ({ id: index,name:`Item ${index}` }));
  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          viewableItems.value = vItems;
        }}
        renderItem={({ item }) => {
          return <ItemFlatlist item={item} viewableItems={viewableItems} />;
        }}
      />
    </View>
  )
}

export default FlatlistAnimation

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width:SIZE.width,
    backgroundColor: '#fff',
  },
})