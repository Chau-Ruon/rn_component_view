import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native'

const {width,height} = Dimensions.get("window");
const borderRadius = 20;
const modal = height - 350;
const ShowAlert = (props) => {
    const {title, body, type , button =[]} = props
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.headBtnRemove}>
                <Text style={styles.headIconRemove}>X</Text>
            </TouchableOpacity>
            <View style={styles.modal}>
                {/* ========================HEADER==================== */}
                <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                {/* =========================BODY===================== */}
                <View style={{marginVertical:10,paddingHorizontal:10,alignItems:'center'}}>
                    <Text style={styles.body}>{body}</Text>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.boxAgree}>
                        <TouchableOpacity style={styles.btnAgree}>
                            <Text style={styles.body}>Đồng ý</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
};
export default ShowAlert;
const styles = StyleSheet.create({
    container:{
        height:height,
        width:width,
        backgroundColor: "rgba(0,0,0,.25)",
        position:"absolute",
        justifyContent:"center",
        alignItems:"center",
    },
    headBtnRemove:{
        // backgroundColor:"red",
        position:"absolute",
        zIndex:3,
        height:40,
        width:40,
        right:width/4 - 75,
        top:modal/4 + 50,
        alignItems:"center"
    },
    headIconRemove:{
        fontSize:25,
    },
    modal:{
        borderRadius:borderRadius,
        height:modal,
        width:width - 50,
        
        backgroundColor: "#00D084",
        position:"absolute",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    header:{
        borderBottomWidth:1,
        width: "100%",
        borderTopLeftRadius:borderRadius,
        borderTopRightRadius:borderRadius,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#FF8A65",
        height:50,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    title:{
        fontSize:22,
        fontWeight:"bold",
    },
    body:{
        fontSize:16,
        fontWeight:"400",
    },
    bottom:{
        marginVertical:10,
        paddingHorizontal:10,
        width:'100%',
        alignItems:'center',
        backgroundColor:"white",
        position:"absolute",
        bottom:0,
    },
    boxAgree:{
        height:40,
        width:50,
        alignItems:"flex-end",
        justifyContent:'flex-end',
        backgroundColor:"red"
    },
    btnAgree:{
        borderRadius:48,
        justifyContent:'center',
    },
})