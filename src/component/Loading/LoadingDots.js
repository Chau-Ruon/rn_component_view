import React,{useState,useEffect,useRef} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    Easing,
    Dimensions,
    StyleSheet,
} from 'react-native'


const {width,height} = Dimensions.get("window");

export const Loading = (props) => {
    const {
        color = [],
        loading = false
    } = props;
    const DataDots = color.map((val,idx) =>{
        return idx
    });
    const AnimatedValueOne = useRef(new Animated.Value(0)).current;
    const AnimatedValueTwo = useRef(new Animated.Value(0)).current;
    const AnimatedValueThree = useRef(new Animated.Value(0)).current;
    const AnimatedValueFour = useRef(new Animated.Value(0)).current;

    const toValue = -10
    const toValueDown = 0;
    const duration = 250;

    useEffect(()=>{
        onStartAnimate();
    },[])

    const Animation = (AnimatedValue,nextAnimation) => {
        Animated.sequence([
            Animated.timing(AnimatedValue, {
                toValue: toValue,
                duration: duration,
                useNativeDriver:true,
            }),
            Animated.timing(AnimatedValue, {
                toValue: toValueDown,
                duration: duration,
                useNativeDriver:true,
            }),
        ]).start();
        setTimeout(()=>{
            nextAnimation()
        },duration)
    }
    const arr = 
    [
        {
            translateY: AnimatedValueOne
        },
        {
            translateY: AnimatedValueTwo
        },
        {
            translateY: AnimatedValueThree
        },
        {
            translateY: AnimatedValueFour
        },
    ]
    
    const onStartAnimate = () => {
        const onFourAnimation = () => {
            Animation(AnimatedValueFour, onStartAnimate)
        }
        const onThreeAnimation = () => {
            Animation(AnimatedValueThree, onFourAnimation)
        }
        const onTwoAnimation = () => {
            Animation(AnimatedValueTwo, onThreeAnimation)
        }
        Animation(AnimatedValueOne,onTwoAnimation);
    }

    return(
        <View style={styles.containerDotsOne} >
            {
                DataDots.map((ele,index) => {
                    return(
                        <Animated.View key={index} style={[
                            styles.itemDotsOne,
                            {
                                backgroundColor: color[index],
                                transform:[arr[index]]
                            },
                        ]}>
                        </Animated.View>
                    );
                })
            }
        </View>
    );
}


const LoadingDots = () => {
    const [loading,setLoading] = useState(false);
    return (
        <View style={styles.container}>
            <Loading loading={loading} color={['#db3e00',"#fccb00",'#006b76','#8ED1FC']}/>
        </View>
    )
}

export default LoadingDots

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
    },
    btnOpen:{
        height:50,
        width:60,
        backgroundColor:"#a6ac32",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:16,
    },
    containerDotsOne:{
        // backgroundColor: "rgba(0,0,0,.5)",
        position:"absolute",
        height,
        width,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },
    itemDotsOne:{
        height: 10,
        width: 5,
        borderRadius:50,
        marginRight:5,
    },
})