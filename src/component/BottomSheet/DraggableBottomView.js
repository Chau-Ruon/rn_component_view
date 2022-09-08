import React, {useRef,useState,useEffect} from 'react';
import {
    Animated,
    PanResponder,
    Platform,
    StyleSheet,
    View,
    Dimensions,
    Text,
    Keyboard,
    TouchableHighlight,
    TouchableWithoutFeedback,
} from 'react-native';


const {width,height} = Dimensions.get("window");

const SHEET_MAX_HEIGHT = height * 0.6;
const SHEET_MIN_HEIGHT = height * 0.1;
const MAX_UPWARD_TRANSLATE_Y = SHEET_MIN_HEIGHT - SHEET_MAX_HEIGHT; // negative number
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 50;

const DraggableBottomView = ({children,active,...props}) => {
    // console.log("🚀 ~ file: DraggableBottomView.js ~ line 24 ~ DraggableBottomView ~ active", active)
    const {hideBottomSheet} = props;
    const animatedValue = useRef(new Animated.Value(0)).current;  
    const opacityValue = useRef(new Animated.Value(0)).current;  
    const lastGestureDy = useRef(0);

    useEffect(() => {
        console.log("🚀 ~ file: DraggableBottomView.js ~ line 32 ~ useEffect ~ active", active)
        if (active) {
            springAnimation('up');
        }else{
            springAnimation('down');
        }
        opacityAmin(active);
    }, [active])

    const panResponder = useRef(
        PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            animatedValue.setOffset(lastGestureDy.current);
        },
        onPanResponderMove: (e, gesture) => {
            animatedValue.setValue(gesture.dy);
        },
        onPanResponderRelease: (e, gesture) => {
            animatedValue.flattenOffset();
            if (gesture.dy > 0) {
                if (lastGestureDy.current !== 0 && gesture.dy <= DRAG_THRESHOLD) {
                    springAnimation('up');
                } else {
                    springAnimation('down');
                }
                hideBottomSheet(false)

            } else {
                if(gesture.dy !== 0){
                    hideBottomSheet(true)
                }
                
                if (gesture.dy >= -DRAG_THRESHOLD) {
                    springAnimation('down');
                } else {
                    springAnimation('up');
                }
            }
        },
        }),
    ).current;

    const springAnimation = (direction) => {
        lastGestureDy.current = direction === 'down' ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
        console.log("🚀 ~ file: DraggableBottomView.js ~ line 75 ~ springAnimation ~ direction", direction)
        console.log("🚀 ~ file: DraggableBottomView.js ~ line 75 ~ springAnimation ~ lastGestureDy.current", lastGestureDy.current)
        Animated.spring(animatedValue, {
            toValue: lastGestureDy.current,
            delay:200,
            useNativeDriver: true,
        }).start();
    };

    const opacityAmin = (active) => {
        console.log("🚀 ~ file: DraggableBottomView.js ~ line 103 ~ opacityAmin ~ active", active)
        if (active) {
            Animated.timing(
                opacityValue,{
                    toValue: 1,
                    duration:1,
                    useNativeDriver: true,
                    // easing: Easing.linear,
            }).start();
        } else {
            Animated.timing(
                opacityValue,{
                    toValue: -1,
                    // duration:700,
                    useNativeDriver: true,
                    // easing: Easing.linear,
            }).start();
        }
    }

    const bottomSheetAnimation = {
        transform: [
            {
                translateY: animatedValue.interpolate({
                inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
                outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
                extrapolate: 'clamp',
                }),
            },
        ],
    };
    
    const opacityView = {
        opacity: opacityValue.interpolate({
            inputRange: [0, 2],
            outputRange: [0, 2],
            extrapolate: "clamp",
        }),
        zIndex:opacityValue.interpolate({
            inputRange: [-1, 1],
            outputRange: [-1, 0],
            extrapolate: "clamp",
        }),
    }

    return (
        <Animated.View style={[styles.container,opacityView]} >
            <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
                <View style={styles.draggableArea} {...panResponder.panHandlers}>
                    <View style={styles.dragHandle} pointerEvents={'none'} />
                </View>
                <View style={styles.childrenView}>
                    {children}
                </View>
            </Animated.View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        backgroundColor: "rgba(0,0,0,.5)",
        right:0,
        left:0,
        bottom:0,
        height: height,
        // zIndex:-1,
    },
    bottomSheet: {
        zIndex:999,
        position: 'absolute',
        width: width,
        height: SHEET_MAX_HEIGHT,
        bottom: -SHEET_MAX_HEIGHT + SHEET_MIN_HEIGHT - 80,
        backgroundColor:'white',
        // bottom:0,
        alignItems: "center",
        ...Platform.select({
          android: {elevation: 3},
          ios: {
            shadowColor: '#a8bed2',
            shadowOpacity: 1,
            shadowRadius: 6,
            shadowOffset: {
              width: 2,
              height: 2,
            },
          },
        }),
        backgroundColor: 'white',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
    },
    draggableArea: {
        width: 100,
        height:70,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        alignItems:"center",
        paddingVertical: 1,
        position: 'absolute',
        top:-55,
        // backgroundColor: 'white',
        // backgroundColor: 'rgba(184,0,0,0.15)',

    },
    dragHandle: {
        width: 100,
        height: 6,
        backgroundColor: '#d3d3d3',
        borderRadius: 10,
    },
    childrenView:{
        marginTop:20,
        // backgroundColor:"#fcb900",
        marginHorizontal:5,
    }
});

export default DraggableBottomView;
