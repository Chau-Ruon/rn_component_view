import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'

const HeaderHomeTab = () => {
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize:20,
        fontWeight:"bold"
      }}>Home</Text>
    </View>
  )
}
export default HeaderHomeTab

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      // backgroundColor:"#8ed1fc",
    },
})
