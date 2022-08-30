import React,{useRef,useState,useEffect} from 'react'
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

export const LoadingDots = (props) => {
    
    useEffect(()=>{
        onStartAnimate();
    },[]);

    const animations = {
        one: useRef(new Animated.Value(0)).current,
        two: useRef(new Animated.Value(0)).current,
        three: useRef(new Animated.Value(0)).current,
        four: useRef(new Animated.Value(0)).current,
    }

    const onAnimate = (animation,nextAnimation) => {
        Animated.sequence([
            Animated.timing(animation, {
                toValue: -10,
                duration: 300,
                useNativeDriver:true,
            }),
            Animated.timing(animation, {
                toValue: 0,
                duration: 300,
                useNativeDriver:true,
            })
        ]).start();
        setTimeout(nextAnimation,300)
    }

    const onStartAnimate = () =>{
        const onFourAnimation = () => {
            onAnimate(animations.four, onStartAnimate)
        }
        const onThreeAnimation = () => {
            onAnimate(animations.three, onFourAnimation)
        }
        const onTwoAnimation = () => {
            onAnimate(animations.two, onThreeAnimation)
        }
        onAnimate(animations.one, onTwoAnimation)
        
    }

    return(
        <View style={styles.containerDotsOne} >
            <Animated.View style={[
                styles.itemDotsOne,
                {
                    transform:[{
                        translateY: animations.one
                    }]
                }
            ]}>
            </Animated.View>
            <Animated.View style={[
                styles.itemDotsTwo,
                {
                    transform:[{
                        translateY: animations.two
                    }]
                }
            ]}>
            </Animated.View>
            <Animated.View style={[
                styles.itemDotsThree,
                {
                    transform:[{
                        translateY: animations.three
                    }]
                }
            ]}>
            </Animated.View>
            <Animated.View style={[
                styles.itemDotsFour,
                {
                    transform:[{
                        translateY: animations.four
                    }]
                }
            ]}>
            </Animated.View>
        </View>
    );
}


const OrtherLoading = () => {
    const [loading,setLoading] = useState(false);
    return (
        <View style={styles.container}>
            {/* <TouchableOpacity style={styles.btnOpen} onPress={()=>setLoading(!loading)}>
                <Text>Open</Text>
            </TouchableOpacity> */}
            <LoadingDots/>
        </View>
    )
}

export default OrtherLoading

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
        borderRadius:16,
        marginRight:2,
        backgroundColor:"#db3e00",
    },
    itemDotsTwo:{
        height: 15,
        width: 15,
        borderRadius:16,
        marginRight:2,
        backgroundColor:"#fccb00",
    },
    itemDotsThree:{
        height: 15,
        width: 15,
        borderRadius:16,
        marginRight:2,
        backgroundColor:"#8ED1FC",
    },
    itemDotsFour:{
        height: 15,
        width: 15,
        borderRadius:16,
        marginRight:2,
        backgroundColor:"#5e7664",
    }
})