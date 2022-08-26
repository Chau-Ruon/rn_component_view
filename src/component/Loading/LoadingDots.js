import React,{useState,useEffect,useRef} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    Easing,
    StyleSheet,
} from 'react-native'



export const DotsOne = (props) => {
    const {
        color = [],
    } = props;
    const  DataDots = [1,2,3,4]
    const AnimatedValue = useRef(new Animated.Value(0)).current;

    useEffect(()=>{
        Animation();
    },[])

    const animations={
        one : new Animated.Value(0),
        two : new Animated.Value(0),
        three : new Animated.Value(0),
        four : new Animated.Value(0),
    }

    const Animation = () => {
        Animated.timing(AnimatedValue,{
            toValue:90,
            duration:1000,
            easing:Easing.linear
            // useNativeDriver:true,
        });
    }

    const translateY = {
        transform:[
            {
                translateY: AnimatedValue.interpolate({
                    inputRange: [0, 200],
                    outputRange: [0, 200],
                    extrapolate: "clamp",
                }),
            }
        ]
    }

    console.log(`translateY`,translateY.transform);

    return(
        <View>
            {
                DataDots.map((ele,index) => {
                    return(
                        <Animated.View style={[
                            styles.containerDotsOne,
                            {backgroundColor: color[index]},
                            translateY
                        ]}>

                        </Animated.View>
                    );
                })
            }
        </View>
    );
}


const LoadingDots = () => {
    return (
        <View style={styles.container}>
            <View style={styles.dots}>
                <DotsOne color={['#db3e00',"#fccb00",'#006b76','#8ED1FC']}/>
            </View>
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
    containerDotsOne:{
        height:20,
        width:20,
        borderRadius:16,
        marginRight:10,
    },
    dots:{
        flexDirection:"row",
       
    },
})