import React,{useState,useEffect,useRef} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    Image,
    Animated,
    Easing,
} from 'react-native'
import {
    Warning,
    Success,
    Information,
    Error,
    IconX,
} from '../../assets/index'
import { COLOR, SIZE, TEXT } from '../../theme/index'
const {width,height} = Dimensions.get("window");
const borderRadius = 20;
const heightModal = height - 450;
const widthModal= width - 50;
const widthBtn = 110;
const heightBtn = 40;

export const ShowAlert = (props) => {
    const { title, message, type, disabled, button=[],showAlert } = props;
    console.log("🚀 ~ file: showAlert.js ~ line 30 ~ ShowAlert ~ showAlert", showAlert)
    const animatedValue = useRef(new Animated.Value(0)).current;

    const colorBALR = () => {
        let colorBalr = COLOR.primary;
        if (disabled) colorBalr = COLOR.primary8;
        else if (type === "success") colorBalr = COLOR.green;
        else if (type === "warning") colorBalr = COLOR.yellow;
        else if (type === "information") colorBalr = COLOR.infor;
        else if (type === "error") colorBalr = COLOR.error;
        else if (borderColor) colorBalr = borderColor;
        return colorBalr;
    };

    const colorALR = () => {
        let colorAlr = COLOR.primary;
        if (disabled) colorAlr = COLOR.primary8;
        else if (type === "success") colorAlr = COLOR.green24;
        else if (type === "warning") colorAlr = COLOR.yellow24;
        else if (type === "information") colorAlr = COLOR.infor24;
        else if (type === "error") colorAlr = COLOR.error24;
        else if (color) colorAlr = color;
        return colorAlr;
    };

    const colorText = () => {
        let colorText = COLOR.white;
        if (disabled) colorText = COLOR.primary24;
        else if (type === "success") colorText = COLOR.green;
        else if (type === "warning") colorText = COLOR.yellow;
        else if (type === "information") colorText = COLOR.infor;
        else if (type === "error") colorText = COLOR.error;
        else if (textColor) colorText = textColor;
        return colorText;
    };

    const icon = () => {
        let icon = Error;
        if (type === "success") icon = Success;
        else if (type === "warning") icon = Warning;
        else if (type === "information") icon = Information;
        else icon = Error;
        return icon;
    };
    
    useEffect(() => {
        if (showAlert) {
            console.log(`lfgjdfgklhdfks;ghdfgk;hsdfkghfkghsdkghdksfghkdsghfkhsdkghdjksghfjk`);
            Animated.timing(
                animatedValue,
                {
                    toValue: 1,
                    duration:2000,
                    useNativeDriver: true,
                    // easing: Easing.linear,
                }
                ).start()
        } else {
            console.log("🚀 ~ file: showAlert.js ~ line 78 ~ useEffect ~ showAlert", showAlert)
            Animated.timing(
                animatedValue,
                {
                    toValue: 0,
                    duration: 5000,
                    useNativeDriver: true,
                    // easing: Easing.linear,
                }
            ).start()
        }
    }, [showAlert]);
    
    const hideAnimated = {
        opacity: animatedValue.interpolate({
            inputRange: [0.01, 2],
            outputRange: [0, 6],
            extrapolate: "clamp",
        }),
    }
    const styles = styleWithProps( colorALR(), colorBALR(), colorText());
    return (
        <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss()} accessible={false}>
            <View style={styles.container}>
                <Animated.View style={[styles.modal,hideAnimated]}>
                    <TouchableOpacity style={styles.headBtnRemove}>
                        <Image style={styles.headIconRemove} source={IconX}/>
                    </TouchableOpacity>
                    {/* =======================HEADER===================== */}
                    <View style={styles.header}>
                        <Image style={styles.iconHeader} source={icon()}/>
                        <View style={styles.boxTitleHeader}>
                            <Text style={styles.titleHeader}>{title}</Text>
                        </View>
                    </View>
                    {/* ========================BODY====================== */}
                    <View style={{marginVertical:10,paddingHorizontal:10,alignItems:'center'}}>
                        <Text style={styles.body}>{message}</Text>
                    </View>

                    {/* =======================BOTTOM===================== */}
                    <View style={styles.bottom}>
                        {
                            button.map((element,index) => {
                                return (
                                    <TouchableOpacity onPress={element.onPress} key={index} style={ index === 1 ? styles.btnAgree : styles.btnClose}>
                                        <Text style={styles.textBtnClose}>{element.text}</Text>
                                    </TouchableOpacity>

                                )
                            })
                        }
                    </View>
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styleWithProps = (color, colorBorder, colorText) => {
    return StyleSheet.create({
        container:{
            height:height,
            width:width,
            position:"absolute",
            justifyContent:"center",
            alignItems:"center",
            zIndex:3,
        },
        headBtnRemove:{
            position:"absolute",
            zIndex:5,
            height:40,
            width:40,
            right: -10,
            top:-18,
            alignItems:"center"
        },
        headIconRemove:{
            height:15,
            width:15,
        },
        modal:{
            borderRadius:borderRadius,
            height:heightModal,
            width:widthModal,
            backgroundColor: "#fff",
            position:"absolute",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
    
            elevation: 8,
        },
        header:{
            borderBottomWidth:1,
            width: "100%",
            borderTopLeftRadius:borderRadius,
            borderTopRightRadius:borderRadius,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:color,
            height:50,
            flexDirection:'row',
        },
        iconHeader:{
            // backgroundColor:"red",
            // alignItems:"flex-start",
            justifyContent:"flex-start",
            marginLeft:20,
            width:25,
        },
        boxTitleHeader:{
            width:"90%",
            alignItems:"center",
            justifyContent:"center",
            // backgroundColor:"#c4def6",
        },
        titleHeader:{
            fontSize:22,
            fontWeight:"bold",
            marginRight:50,
        },
        body:{
            fontSize:16,
            fontWeight:"400",
        },
        bottom:{
            marginVertical:10,
            paddingHorizontal:30,
            width:'100%',
            alignItems:'center',
            // backgroundColor:"white",
            position:"absolute",
            bottom:0,
            flexDirection:'row',
            justifyContent:"space-between"
        },
        btnAgree:{
            height:heightBtn,
            width:widthBtn,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"#002665",
            borderRadius:8,
        },
    
        btnClose:{
            height:heightBtn,
            width:widthBtn,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"red",
            borderRadius:8,
        },
        textBtnClose:{
            fontSize:16,
            color:"white",
            fontWeight:"700"
        },
    })
}