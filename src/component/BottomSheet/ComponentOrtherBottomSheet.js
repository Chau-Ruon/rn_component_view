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
const SHEET_MAX_HEIGHT = height * 0.6;
const SHEET_MIN_HEIGHT = height * 0.1;
const MAX_UPWARD_TRANSLATE_Y = SHEET_MIN_HEIGHT - SHEET_MAX_HEIGHT; // negative number
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 50;

const ComponentOrtherBottomSheet = (props) => {
    const {
        children,
        active,
        destination,
    } = props;
    const styles = styleWithProps();
    const animatedValue = useRef(new Animated.Value(0)).current;
    const lastGestureDy = useRef(0);
    // const [gestureStateY,setGestureStateY] = useState(0);
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) =>true,
            onPanResponderGrant:(evt,gestureState) =>{
                animatedValue.setOffset(lastGestureDy.current);
            },
            // khi đang di chuyển ngon tay trên màng hình
            onPanResponderMove: (evt, gestureState) => {
                animatedValue.setValue(gestureState.dy);
            },

            // khi thả tay, có kết quả cuối cùng
            onPanResponderRelease: (e, gestureState) => {
                // console.log("🚀 ~ file: ComponentOrtherBottomSheet.js ~ line 40 ~ ComponentOrtherBottomSheet ~ gesture", gestureState.dy)
                // console.log(animatedValue);
                // springAnimation
                if (gestureState.dy > 0) {
                    // is dragging down
                    if (lastGestureDy.current !== 0 && gestureState.dy <= DRAG_THRESHOLD) {
                      springAnimation('up');
                    } else {
                      springAnimation('down');
                    }
                  } else {
                    // is dragging up
                    if (gestureState.dy >= -DRAG_THRESHOLD) {
                      springAnimation('down');
                    } else {
                      springAnimation('up');
                    }
                  }

                // console.log("🚀 ~ file: ComponentOrtherBottomSheet.js ~ line 68 ~ ComponentOrtherBottomSheet ~ animatedValue", animatedValue)
                // console.log("🚀 ~ file: ComponentOrtherBottomSheet.js ~ line 69 ~ ComponentOrtherBottomSheet ~ -height/3 + 140", -height/3 + 140)
                // if (animatedValue > -height/3 + 140) {
                //     // scrollTo(0)
                //     // translateY.value = withSpring(destination, {damping:50})
                //     springAnimation('down')
                // }else if (animatedValue < -height/3 + 142) {
                //     springAnimation('up')
                // }
            }
        })
    ).current;


    const springAnimation = (direction) => {
        lastGestureDy.current =
          direction === 'down' ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
        Animated.spring(animatedValue, {
          toValue: lastGestureDy.current,
          useNativeDriver: true,
        }).start();
      };
    
    const position = {transform: [{translateY: animatedValue}]}

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
        // <View style={styles.container} >
            <Animated.View style={[styles.modal,bottomSheetAnimation]} {...panResponder.panHandlers}>
                <View style={styles.viewLine}>
                    <View style={styles.line} />
                </View>

            </Animated.View>
        // </View>
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
            height: SHEET_MAX_HEIGHT,
            bottom: -SHEET_MAX_HEIGHT + SHEET_MIN_HEIGHT -50,
            // bottom: -370,
            width:width,
            position:"absolute",
            backgroundColor:"#FCB900",
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