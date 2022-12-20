import React, { useEffect, useState } from "react";
import { star, star_selected} from "../../assets/index"
import {
  StyleSheet,
  Animated,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  View,
  Image,
} from "react-native";

const STAR_SIZE = 20;

const Rating = (props) => {
  const { size, isDisabled, starStyle, ratingCount, HadStar,setRatingValues} = props;
  const [selected, setSelected] = useState(false);
  const [ratingDefult, setRatingDefult] = useState(HadStar || undefined);
  const starSelectedInPosition = Array(ratingCount).fill(0).map((item,idx)=>idx);
  const selectedIcon = async (position) => {
    setRatingDefult(position);
    if (position === ratingDefult) {
      setRatingDefult(0);
    }
    setSelected(!selected);
  };
  useEffect(()=>{
    // ratingValues[index] = ratingDefult;
    // setRatingValues([...ratingValues]);
    setRatingValues(ratingDefult);

  },[ratingDefult])

  return (
    <View style={{ flexDirection: "row" }}>
      {starSelectedInPosition.map((item, idx) => {
        const indexStar = idx+1;
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={indexStar}
            onPress={() => selectedIcon(indexStar)}
            disabled={HadStar ? true : isDisabled}
          >
            <Image
              source={
                indexStar <= HadStar
                  ? star_selected
                  : indexStar <= ratingDefult
                  ? star_selected
                  : star
              }
              style={[
                styles.starStyle,
                {
                  width: size || STAR_SIZE,
                  height: size || STAR_SIZE,
                },
                starStyle,
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Rating;
const styles = StyleSheet.create({
  starStyle: {
    margin: 3,
  },
});
