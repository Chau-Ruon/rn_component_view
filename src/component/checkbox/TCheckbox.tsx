import React, {useState} from 'react'
import { 
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  TextStyle,
  Dimensions,
} from 'react-native'

interface props {
  borderStyle?: ViewStyle,
  checkedStyle?: ViewStyle,
  isChecked: boolean,
  label?: string,
  height?: number,
  labelStyle?: TextStyle,
  onChange: ()=>void,
}
const {width,height } = Dimensions.get('window');

export const TCheckbox = (
  {
    borderStyle ,
    checkedStyle ,
    isChecked,
    labelStyle,
    label,
    onChange,
  }:props
) => {
  return (
    // View bao ở ngoài bỏ
    <View style={{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
    }}>
      <View style={{
        backgroundColor:"blue",
        width
      }}>
        <TouchableOpacity 
          activeOpacity={1}
          style={{
            justifyContent:"center",
            alignItems:"center",
          }}
          onPress={onChange}
        >
          <View style={[
            styles.outSide,
            borderStyle,
          ]}>
            <View style={[
              styles.inSide,
              checkedStyle
            ]}/>
          </View>
        </TouchableOpacity>
        { label && 
          <Text 
            style={[
              styles.label,
              labelStyle,
            ]}>
            {label}
          </Text>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  outSide:{
    justifyContent:"center",
    alignItems: "center",
    borderRadius:8,
    height: 20,
    width: 20,
    borderWidth:2,
    borderColor:"red",
  },
  inSide:{
    height: 10,
    width: 10,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    backgroundColor: "red",
  },
  label:{
    marginLeft:10,
  }
})