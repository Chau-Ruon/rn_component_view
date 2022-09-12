import React,{useState,useEffect,useRef} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native'

import LightBox from "../../component/Modal/LightBox"

import { hinh1,hinh2,hinh3 } from '../../assets/indexImage';

export const image = [
    hinh1,
    hinh2,
    hinh3,
]

const LightBoxScreen = ({navigation}) => {
    const [showLightBox,setShowLightBox] = useState(false);
    const [imageLightBox,setImageLightBox] = useState("");

    const show = (param) => {
        setShowLightBox(!showLightBox);
        setImageLightBox(param);
    }

    return (
        <View style={styles.container}>
            {image.map((val,idx)=> {
                console.log("🚀 ~ file: LightBoxScreen.js ~ line 25 ~ {image.map ~ val: ", val)
                return(
                    <TouchableOpacity key={idx} style={styles.btnShowModals} onPress={() => show(val)}>
                        <Image style={styles.image} source={val} />
                    </TouchableOpacity>
                )
            })}
            
            {showLightBox && <LightBox image={imageLightBox} setShowLightBox={setShowLightBox}/>}
        </View>
    )
}

export default LightBoxScreen

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
    },
    btnShowModals:{
        marginTop:20,
        width:90,
        height:40,
        borderRadius:16,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#3c48fd",
    },
    image:{
        width:90,
        height:90,
        borderRadius:16,
    }
})