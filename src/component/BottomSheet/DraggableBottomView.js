import React, {useRef,useEffect} from 'react';
import {
    Animated,
    PanResponder,
    Platform,
    StyleSheet,
    View,
    Dimensions,
    Text,
    Keyboard,
    TouchableHighlight
} from 'react-native';


const {width,height} = Dimensions.get("window");

const SHEET_MAX_HEIGHT = height * 0.6;
const SHEET_MIN_HEIGHT = height * 0.1;
const MAX_UPWARD_TRANSLATE_Y = SHEET_MIN_HEIGHT - SHEET_MAX_HEIGHT; // negative number
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 50;

const DraggableBottomView = ({children,active,...props}) => {
    const {hideBottomSheet} = props;
    const animatedValue = useRef(new Animated.Value(0)).current;
    const lastGestureDy = useRef(0);

    useEffect(() => {
        if (active) {
            springAnimation('up');
        }
        if (lastGestureDy.current !== 0) {
            hideBottomSheet(false)
        }
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
            // is dragging down
            if (lastGestureDy.current !== 0 && gesture.dy <= DRAG_THRESHOLD) {
                console.log("🚀 ~ file: DraggableBottomView.js ~ line 45 ~ DraggableBottomView ~ lastGestureDy.current", lastGestureDy.current)
                springAnimation('up');
            } else {
                springAnimation('down');
            }
            } else {
            // is dragging up
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
        lastGestureDy.current =
        direction === 'down' ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
        Animated.spring(animatedValue, {
            toValue: lastGestureDy.current,
            useNativeDriver: true,
        }).start();
    };

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

    return (
        <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
            <View style={styles.draggableArea} {...panResponder.panHandlers}>
                <View style={styles.dragHandle} pointerEvents={'none'} />
            </View>
            <View style={styles.childrenView}>
                {children}
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    bottomSheet: {
        zIndex:999,
        position: 'absolute',
        width: '100%',
        height: SHEET_MAX_HEIGHT,
        bottom: -SHEET_MAX_HEIGHT + SHEET_MIN_HEIGHT - 80,
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
