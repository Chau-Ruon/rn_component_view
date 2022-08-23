import { 
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'
import React from 'react'

const ViewComB = (props) => {
  const {onpen} = props;
  return (
    <View>
        <TouchableOpacity style={styles.btn} onPress={()=> onpen(true)}>
            <Text>BottomSheet</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    btn:{
        position:'absolute',
        top: 0,
        height:50,
        width:90,
        backgroundColor:"#c1e1c5",
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default ViewComB