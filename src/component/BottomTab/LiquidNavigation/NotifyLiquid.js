import React,{useRef,useState,useEffect} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    Dimensions,
    StyleSheet,
} from 'react-native'

const NotifyLiquid = () => {
  return (
    <View style={styles.container}>
      <Text>Notify</Text>
    </View>
  )
}
export default NotifyLiquid

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
})
