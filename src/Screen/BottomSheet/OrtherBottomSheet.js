import React,{useState,useEffect} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import {DraggableBottomView} from '../../component/index'
const OrtherBottomSheet = () => {
    const [show,setShow] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={()=> setShow(!show)}>
                <Text>BottomSheet</Text>
            </TouchableOpacity>
            <DraggableBottomView active={show} hideBottomSheet={setShow}>
                {console.log("🚀 ~ file: OrtherBottomSheet.js ~ line 18 ~ OrtherBottomSheet ~ setShow", setShow)}
                <Text>kdsjhksadsfasasdf123d</Text>
            </DraggableBottomView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    btn:{
        position:'absolute',
        top: 0,
        height:50,
        width:90,
        backgroundColor:"#c1e1c5",
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default OrtherBottomSheet