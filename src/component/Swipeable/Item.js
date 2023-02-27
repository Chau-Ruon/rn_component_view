import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native'
import React,{useState} from 'react'
import { Swipeable } from 'react-native-gesture-handler';
import { SIZE, TEXT } from '../../theme';



const Item = ({ itemlist,index, onDelete }) => {
  // console.log("🚀 ~ file: Item.js:16 ~ Item ~ index:", index)
  const [swipeables, setSwipeable] = useState(null);
  // console.log('swipeables: ', swipeables);
  let row = [];
  let prevOpenedRow;


  const closeRow = (index) => {
    console.log('closerow',index);
    if (prevOpenedRow && prevOpenedRow !== row[index]) {
      prevOpenedRow.close();
    }
    prevOpenedRow = row[index];
  };


  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <TouchableOpacity onPress={onDelete}>
        <View style={styles.deleteButton}>
          <Animated.Text
            style={[styles.deleteText, { transform: [{ translateX: trans }] }]}
          >
            Delete
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable
      ref={(ref) => (setSwipeable(ref))}
      onSwipeableOpen={() => closeRow(index)}
      friction={2}
      rightThreshold={140}
      renderRightActions={renderRightActions}
      onSwipeableRightOpen={onDelete}

      // renderRightActions={(progress, dragX) =>renderRightActions(progress, dragX)}
      // onSwipeableOpen={() => closeRow(index)}
      // ref={(ref) => (row[index] = ref)}
      // rightThreshold={-100}
    >
      <View style={styles.item}>
        <Text style={styles.title}>{itemlist.title}</Text>
      </View>
    </Swipeable>
  );
};


export default Item

const styles = StyleSheet.create({
  item:{
    backgroundColor:"#194D33",
    // width:SIZE.width - 50,
    height:50,
    marginBottom:5,
    // marginHorizontal:19,
    // marginRight:10,
  },
  deleteButton:{
    height:140,
    width:90,
  },
  deleteText:{
    ...TEXT.bold,
    ...TEXT.fz12,
  }
})