import React,{useState,useEffect} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import { RadioButton } from "react-native-paper";

import {DraggableBottomView} from '../../component/index'
import ViewComB from './ViewComB'
const OrtherBottomSheet = () => {
    const [show,setShow] = useState(false);
    
    const [checked, setChecked] = useState("");
    const arrList = ["User", "Transaction"];
    
    const handleValue = (value) => {
        setChecked(value);
    };
    const handleDone = () => {
        setShow(false);
    };

    return (
        <View style={styles.container}>
            <ViewComB onpen={setShow}/>
            { console.log("🚀 ~ file: OrtherBottomSheet.js ~ line 14 ~ OrtherBottomSheet ~ show", show)}
            <DraggableBottomView active={show} hideBottomSheet={setShow}>
                <View style={styles.containerTop}>
                    <TouchableOpacity 
                        onPress={() => setShow(false)}
                        >
                        <Text style={styles.textTop}>Close</Text>
                    </TouchableOpacity>
                    <Text style={styles.textHead}>Select</Text>
                    <TouchableOpacity onPress={() => handleDone()}>
                        <Text style={styles.textTop}>Done</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.selectContainer}>
                {arrList.map((item, index) => {
                    return (
                    <TouchableOpacity onPress={() => handleValue(item)} key={index}>
                        <View
                        style={[
                            styles.selectStyle,
                            checked === item && {
                            backgroundColor: "rgba(0, 38, 101, 0.08)",
                            borderRadius: 12,
                            },
                        ]}
                        >
                        <Text style={styles.selectText}>{item}</Text>
                        <RadioButton
                            value={item}
                            status={checked === item ? "checked" : "unchecked"}
                            onPress={() => handleValue(item)}
                            color="black"
                        />
                        </View>
                    </TouchableOpacity>
                    );
                })}
                </View>
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
    },
    containerTop: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        padding: 10,
      },
    textTop: {
        color: "#2567F9",
        fontSize:14,
        fontWeight:"400",
    },
    textHead: {
        color: "#011E32",
        fontSize:16,
        fontWeight:"bold",
    },
    selectContainer: {
        padding: 10,
    },
    selectStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
        backgroundColor: "white",
    },
    selectText: {
        color: '#011E32',
        fontSize:14,
        fontWeight:"400",
        padding: 5,
    },
})

export default OrtherBottomSheet