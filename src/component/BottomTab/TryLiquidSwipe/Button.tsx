import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ButtonProps {}

const Button = (props: ButtonProps) => {
  return (
    <View style={styles.container}>
      <Text>Button</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {}
});
