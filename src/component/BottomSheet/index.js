import React, { useRef,useState,useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Animated,
    Dimensions,
    Easing
} from 'react-native'
const {height,width} = Dimensions.get("window");
const BottomSheet = (props) => {
    const {visible,onRequestClose} = props
    const animation = useRef(new Animated.Value(0)).current;

    const backdrop = {
        transform: [
            {
                translateY: animation.interpolate({
                    inputRange: [0, 0.1],
                    outputRange: [height, 0],
                    extrapolate: "clamp",
                }),
            },
        ],
        opacity: animation.interpolate({
            inputRange: [0.01, 0.5],
            outputRange: [0, 1],
            extrapolate: "clamp",
        }),
    };

    useEffect(()=>{
        if(visible){
            Animated.timing(animation, {
              toValue:0.05,
              duration: 4000,
              useNativeDriver: true,
              easing: Easing.linear,
            }).start();
        }
    },[visible])
    console.log(`visible: ${JSON.stringify(visible)}`);
console.log(`onRequestClose: ${JSON.stringify(onRequestClose)}`);
    const handleClose = () => {
        // visible= false
        onRequestClose;
        Animated.timing(animation, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };

    if(!visible) return null;
    else return (
        <View style={[styles.sheet]}>
            <Animated.View style={[styles.popup, backdrop]}>
                <TouchableOpacity onPress={handleClose}>
                    <Text>Close</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    )
}

export default BottomSheet

const styles = StyleSheet.create({
    sheet: {
        position: "absolute",
        overlayColor:"rgba(0,0,0,.5)",
        height: height,
        width:width,
        justifyContent: "flex-end",
    },
    popup: {
        backgroundColor: "#FFF",
        // marginHorizontal: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        minHeight: 300,
        alignItems: "center",
        justifyContent: "center",
    },
});