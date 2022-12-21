import React,{useRef,useState,useEffect} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    Dimensions,
    StyleSheet,
} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
import { COLOR, SIZE, TEXT } from '../../../theme'

const HomeLiquid = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTrending}>Trending</Text>
      <View style={styles.textBoxSearch}>
        {/* <TextInput></TextInput> */}
        <AntDesign name="search1" size={20} />
        <Text style={styles.textSearch}>search...</Text>
      </View>
    </View>
  )
}
export default HomeLiquid

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  textTrending:{
    ...TEXT.h2,
    ...TEXT.medium,
    textAlign:"center",
  },
  textBoxSearch:{
    marginTop:5,
    height:30,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:SIZE.spacing10,
    backgroundColor:COLOR.region1,
    marginHorizontal:10,
  },
  textSearch:{
    ...TEXT.fz18,
    // backgroundColor:"red",
  }
})
