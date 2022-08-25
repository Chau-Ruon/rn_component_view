import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

const HeaderSettingTab = () => {
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize:20,
        fontWeight:"bold"
      }}>Setting</Text>
    </View>
  )
}

export default HeaderSettingTab
const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      // backgroundColor:"#8ed1fc",
    },
})
