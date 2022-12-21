import React,{useRef,useState,useEffect} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    Dimensions,
    StyleSheet,
} from 'react-native'

const Search = () => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  )
}
export default Search

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
})
