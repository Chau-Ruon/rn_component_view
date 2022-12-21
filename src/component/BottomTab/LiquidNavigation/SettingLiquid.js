import React,{useRef,useState,useEffect} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    Dimensions,
    StyleSheet,
} from 'react-native'

const SettingLiquid = () => {
  return (
    <View style={styles.container}>
      <Text>Setting</Text>
    </View>
  )
}
export default SettingLiquid

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
})
