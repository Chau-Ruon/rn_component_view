import {
  StyleSheet,
  Text,
  View,
  ViewToken,
} from 'react-native'
import React from 'react'
import Animated,{
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { TEXT } from '../../theme';

type ListItemProps = {
  viewableItems: Animated.SharedValue<ViewToken[]>;
  item: {
    id: number,
    name:string,
  };
};

const ItemFlatlist = ({viewableItems,item}:ListItemProps) => {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter((item) => item.isViewable)
        .find((viewableItem) => viewableItem.item.id === item.id)
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.1),
        },
      ],
    };
  }, []);

  return (
    <Animated.View style={[ styles.container, rStyle, ]} >
      <Text style={styles.itemName}>{item.name}</Text>
    </Animated.View>
  );
}

export default ItemFlatlist

const styles = StyleSheet.create({
  container:{
    height: 80,
    width: '90%',
    backgroundColor: '#78CAD2',
    alignSelf: 'center',
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 15,
    marginTop: 20,
  },
  itemName:{
    ...TEXT.fz14,
    ...TEXT.bold,
  },
})