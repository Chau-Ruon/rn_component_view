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
    const handleOnpressInputFlatlistScreen = () => { 
        navigation.navigate("InputFlatlistScreen")
    }
    const InputFlatlistFormik = () => {
        navigation.navigate("InputFomik")
    }
    return (
        <View style={{
            flex: 1,
            justifyContent:"center",
            alignItems:"center",
        }}>
            <ScrollView>
                <TouchableOpacity style={styles.btnCheckbox} onPress={handleOnpress}>
                    <Text style={styles.text}>Checkbox</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCheckbox} onPress={handleOnpressInputFlatlistScreen}>
                    <Text style={styles.text}>InputFlatlist</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCheckbox} onPress={InputFlatlistFormik}>
                    <Text style={styles.text}>InputFlatlistFormik</Text>
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
        marginTop:10,
        borderRadius: 8
    },
    text:{
        marginHorizontal:10,
        color:"white",
        fontSize:15,
        fontWeight:"bold",
    },
})