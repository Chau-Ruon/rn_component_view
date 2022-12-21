import React,{useRef,useState,useEffect} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    Dimensions,
    StyleSheet,
} from 'react-native'

const Notify = () => {
  return (
    <View style={styles.container}>
      <Text>Notify</Text>
    </View>
  )
}
export default Notify

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
})
