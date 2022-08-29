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

export const DotsOne = (props) => {
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

    const toValue = 8
    const toValueDown = 0;
    const duration = 90;

    useEffect(()=>{
        Animation();
    },[loading])

    const translate = (animated) => {
        return {
            translateY:animated.interpolate({
                inputRange: [0,10,20,30,],
                outputRange: [0,-10,20,-30,]
            }),
        }
    }

    const Animation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(AnimatedValueOne, {
                    toValue: toValue,
                    duration: duration,
                    useNativeDriver:true,
                }),
                Animated.timing(AnimatedValueTwo, {
                    toValue: toValue,
                    duration: duration,
                    delay:-50,
                    useNativeDriver:true,
                }),
                Animated.timing(AnimatedValueOne, {
                    toValue: toValueDown,
                    duration: duration,
                    useNativeDriver:true,
                }),
                Animated.timing(AnimatedValueThree, {
                    toValue: toValue,
                    duration: duration,
                    useNativeDriver:true,
                }),
                Animated.timing(AnimatedValueTwo, {
                    toValue: toValueDown,
                    duration: duration,
                    useNativeDriver:true,
                }),
                Animated.timing(AnimatedValueFour, {
                    toValue: toValue,
                    duration: duration,
                    useNativeDriver:true,
                }),
                Animated.timing(AnimatedValueThree, {
                    toValue: toValueDown,
                    duration: duration,
                    useNativeDriver:true,
                }),
                Animated.timing(AnimatedValueFour, {
                    toValue: toValueDown,
                    duration: duration,
                    useNativeDriver:true,
                }),
            ]),
            // {
            //   iterations: 4
            // }
        ).start()
    }
    const arr = [
        translate(AnimatedValueOne),
        translate(AnimatedValueTwo),
        translate(AnimatedValueThree),
        translate(AnimatedValueFour)
    ]

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
            <TouchableOpacity style={styles.btnOpen} onPress={()=>setLoading(!loading)}>
                <Text>Open</Text>
            </TouchableOpacity>
            {loading ? <DotsOne loading={loading} color={['#db3e00',"#fccb00",'#006b76','#8ED1FC']}/> : null}
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
        height: 15,
        width: 15,
        borderRadius:50,
        marginRight:2,
    },
})