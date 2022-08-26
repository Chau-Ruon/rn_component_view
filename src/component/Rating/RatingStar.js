import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Animated,
	TouchableOpacity,
	StyleProp,
	ViewStyle,
	View,
	Image,
} from "react-native";
import { star,star_selected } from "../../static/icons";

const STAR_SIZE = 20;


const RatingStar = (props) => {
    const {
		size,
		isDisabled,
		starStyle,
		ratingCount,
		
	} = props;
    const [selected, setSelected] = useState( false );
	const [ratingDefult, setRatingDefult] = useState(0);
	const starSelectedInPosition = Array(ratingCount).fill(0);
   
	const selectedIcon = (position) => {
		console.log(`position: ${position}`);
		setRatingDefult(position)
		setSelected(!selected)

    };
    return (
		<View style={{
			flexDirection:"row"
		}}>
			{starSelectedInPosition.map((item, index) => {
				return (
					<TouchableOpacity 
						activeOpacity={0.7}
						key={index}	
						onPress={()=>selectedIcon(index)}
						disabled={isDisabled}>
							<Image
								source={index <= ratingDefult ? star_selected : star}
								style={[
								styles.starStyle,
								{
									width: size || STAR_SIZE,
									height: size || STAR_SIZE,
								},
								starStyle
								]}
							/>
					</TouchableOpacity> 
				);
			})}
		</View>
    )
}

export default RatingStar
const styles = StyleSheet.create( {
    starStyle: {
    	margin: 3
    }
});
