import React,{useEffect,useState,useRef} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Dimensions,
    Image,
} from 'react-native';
import { IconX } from '../../assets/index';
import { SIZE,COLOR,TEXT,SHADOWS } from '../../theme';

const boxClose = 50;


const LightBox = (props) => {
    const {image, setShowLightBox} = props;
    const CLOSE = () => {
        setShowLightBox(false);
    }
    return (
        <View style={styles.containerMain}>
            <View style={styles.boxClose}>
                <TouchableWithoutFeedback style={styles.btnClose} onPress={CLOSE}>
                    <Image style={styles.iconClose} source={IconX}/>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.containerSub}>
                <Image style={styles.image} source={image}/>
            </View>
        </View>
    )
}

export default LightBox

const styles = StyleSheet.create({
    containerMain:{
        zIndex:999,
        position:"absolute",
        height:SIZE.height,
        left:0,
        right:0,
        backgroundColor: "rgba(0,0,0,.8)",
        // alignItems:"center",
    },
    containerSub:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    boxClose:{
        height:boxClose,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        // backgroundColor:'red'
    },
    boxImage:{
        alignItems:'center',
        justifyContent:'center'
    },
    btnClose:{
        width:50,
        height:50,
        backgroundColor:"#b0db75",
        alignItems:'center',
        justifyContent:'center'
    },
    iconClose:{
        width:25,
        height:25,
        marginRight:30,
        tintColor:"#fff",
        // backgroundColor:"#45316e",
    },
    image:{
        width:'100%',
        height:"100%",
        resizeMode:"contain"
    }
})