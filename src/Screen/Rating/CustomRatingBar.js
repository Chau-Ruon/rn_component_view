import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import React,{useState,useEffect} from 'react'

export default CustomRatingBar
const CustomRatingBar = (props) => {
  const {maxRating,} =props
  const num = Array(maxRating).fill(0)
  return (
    <View style={styles.Rating}>
      {maxRating.map((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setdefaultRating(item)}
            key={item}>
            <Image
              style={styles.ImageRating}
              source={
                item <= defaultRating
                  ? { uri: starImgFilled }
                  : { uri: starImgCorner }
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  Rating: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 7,
    marginLeft: -20,
  },
  ImageRating: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    marginLeft: 10,
  },
})