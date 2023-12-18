import React, { useCallback, useRef, useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Animated,
    Dimensions,
    Modal,
} from 'react-native';
import {
    BottomSheet,
    scrollTo
} from "../../Component/index";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const {height,width} = Dimensions.get("window");
const SheetBottom = (props) => {
    const [active,setActive] = useState(false);
    const [destination,setdDestination] = useState(0)
    // const onPressOpen = useCallback(()=>{
    //     setActive(!active);
    //     if (active) {
    //         // setdDestination(-400)
    //     }else {
    //         setdDestination(-300)
    //     }
    // },[active])
    const onPressOpen = () => {
        setActive(!active);
        if (!active) {
            console.log("🚀 ~ file: index.js ~ line 32 ~ onPressOpen ~ active", active)
            setdDestination(-300)
        }
    }
    return (
        <GestureHandlerRootView style={{flex: 1,}}>
            <View style={[styles.container]}>
                <TouchableOpacity style={styles.btnOpen} onPress={onPressOpen}>
                    <Text style={active ? styles.text : styles.text1}>Open</Text>
                </TouchableOpacity>
                <BottomSheet 
                    destination={destination}
                    active={active}
                >
                    <View style={styles.inner}>
                        <Text>Crtyretyertyeryrtyrtyrty!</Text>
                        <TouchableOpacity onPress={onPressOpen} style={styles.btnClose}>
                            <Text>Xuong</Text>
                        </TouchableOpacity>
                    </View>
                </BottomSheet>
            </View>
        </GestureHandlerRootView>
    )
}

export default SheetBottom

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#008b02"
    },
    text:{
        fontSize:26,
        fontWeight:"bold",
        color: "#fff"
    },
    text1:{
        color: "black",
        fontSize:26,
        fontWeight:"bold",
    },
    inner:{
        alignItems:"center",
        justifyContent:"center",
    },
    btnOpen:{
        height:50,
        width:100,
        borderRadius:19,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:"red"
    },
    btnClose:{
        height:50,
        width:100,
        borderRadius:19,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:"#fccb00",
        top:100,
    },
});