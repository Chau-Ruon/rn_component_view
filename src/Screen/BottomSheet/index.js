import React, { useRef, useState } from 'react'
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
    BottomSheet
} from "../../component/index"
const {height,width} = Dimensions.get("window");
const SheetBottom = (props) => {
    const [visible,setVisible] = useState(false);

    const onPressOpen = () => {
        setVisible(!visible);
        console.log("ASDFASSDFADSF");
    }
    const onRequestClose = () =>{
        setVisible(!visible);
        {console.log(`sfadsf visible: ${visible}`)}
    }
    return (
        <View style={[styles.container]}>
            <TouchableOpacity style={styles.btnOpen} onPress={onPressOpen}>
                <Text style={styles.text}>Open</Text>
            </TouchableOpacity>
            <BottomSheet  onRequestClose={onRequestClose}  visible={visible}/>
        </View>
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
    },
    btnOpen:{
        height:50,
        width:100,
        borderRadius:19,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:"red"
    },
});