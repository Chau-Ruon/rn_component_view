import React,{
    useCallback,
    useEffect,
    useState,
    useRef,
} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated,
    PanResponder,
    Dimensions,
} from 'react-native'

const {width,height} = Dimensions.get("window");

const ComponentOrtherBottomSheet = (props) => {
    const {
        children,
        active,
        destination,
    } = props;
    const styles = styleWithProps();
    const animatedValue = useRef(new Animated.Value(0)).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) =>true,
            onPanResponderMove: (evt, gestureState) => {
                // The most recent move distance is gestureState.move{X,Y}
                // The accumulated gesture distance since becoming responder is
                // gestureState.d{x,y}
                // console.log(JSON.stringify(gestureState.dy));
                animatedValue = gestureState.dy;
            },
        })
    ).current;

    const trans = () => {
        Animated.spring(animatedValue,{
            toValue: 500,
            // friction: 2,
            tension: 140,
            damping: 50,
        }).start()
    }
    const position = {transform: [{translateY: animatedValue}]}
    console.log(`akjfadjs: `,animatedValue);
    useEffect(() => {
        trans
    },[])
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.modal,position]}>
                <View style={styles.viewLine}
                {...panResponder.panHandlers}>
                    <View style={styles.line} />
                </View>

            </Animated.View>
        </View>
    )
}

export default ComponentOrtherBottomSheet

const styleWithProps = () => {
    return StyleSheet.create({
        container:{
            // flex:1,
            height:height,
            width:width,
            backgroundColor: "rgba(0,0,0,.5)",
            position:"absolute",
            top:0,
        },
        modal:{
            height:150,
            width:width,
            position:"absolute",
            bottom:0,
            backgroundColor:"red",
            alignItems:"center",
            borderRadius:23,
        },
        viewLine:{
            width:width - 15,
            height:20,
            // backgroundColor:"white",
            alignItems:"center",
            borderRadius:23,
        },
        line:{
            width:70,
            height:7,
            marginTop:10,
            backgroundColor:'#5B5858',
            borderWidth:2,
            borderColor:"#5B5858",
            borderRadius:15,
            
        },
    });
  };