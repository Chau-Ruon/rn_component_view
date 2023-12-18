import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemPinchGestureAnimation from '../../Component/ListAnim/ItemPinchGestureAnimation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const PinchGestureAnimation = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ItemPinchGestureAnimation />
    </GestureHandlerRootView>
  )
}

export default PinchGestureAnimation

const styles = StyleSheet.create({})