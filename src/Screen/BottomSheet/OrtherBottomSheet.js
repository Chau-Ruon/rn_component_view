import React,{
    useCallback,
    useEffect,
    useState,
} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'

import {
    ComponentOrtherBottomSheet,
} from "../../component/index";

import { useDispatch,useSelector } from 'react-redux';
import {
    getCancelComplete,
    setCancelComplete,
} from "../../data/userData"

const OrtherBottomSheet = () => {
    const styles = styleWithProps();
    const dispatch = useDispatch();
    const cancelComplete = useSelector(getCancelComplete);

    const openBottomSheet = () => {
        dispatch(setCancelComplete({
            destination: -300,
            activeBottomSheet: true,
        }))
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnOpen} onPress={openBottomSheet}>
                <Text style={styles.text}>Open</Text>
            </TouchableOpacity>
            <ComponentOrtherBottomSheet active={cancelComplete.activeBottomSheet} destination={cancelComplete.destination}>

            </ComponentOrtherBottomSheet>
        </View>
    )
}

export default OrtherBottomSheet

const styleWithProps = () => {
    return StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:"#d5cf93",
            alignItems:"center",
            justifyContent:"center",
        },
        btnOpen:{
            backgroundColor:'red',
            width:60,
            height:50,
            alignItems:"center",
            justifyContent:"center",
            borderRadius:18,
        },
        text:{
            fontSize:16,
            fontWeight:"bold",

        },
    });
  };