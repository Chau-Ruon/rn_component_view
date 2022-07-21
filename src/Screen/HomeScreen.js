import { 
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from 'react-native'
import React from 'react'







export const HomeScreen = ({navigation}) => {
    const handleOnpress = () => { 
        navigation.navigate("CheckboxScreen")
    }
    return (
        <View style={{
            flex: 1,
            justifyContent:"center",
            alignItems:"center",
        }}>
            <ScrollView>
                <TouchableOpacity style={styles.btnCheckbox} onPress={handleOnpress}>
                    <Text>Checkbox</Text>
                </TouchableOpacity>
             
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    btnCheckbox:{
        backgroundColor:"#1273de",
        height:40,
        alignItems:"center",
        justifyContent:"center",
        width:80,
        borderRadius: 8
    }
})