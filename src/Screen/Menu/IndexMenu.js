import React,{useState,useEffect,useRef} from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native'
import {
    ReactNative,
    RocketIcons,
} from '../../assets/index'
import { SIZE,COLOR,TEXT } from '../../theme'
import FastImage from 'react-native-fast-image';

export const listView = [
    {
        id:0,
        name:"Menu 2 Row",
        nameNavigate:"MenuTowRow",
        icon: RocketIcons,
    },
]

export default IndexMenu = ({navigation}) => {
    const onpressHandle = (nameNavigate) => { 
        navigation.navigate(nameNavigate)
    }
    return (
        <View style={styles.container}>
            <View style={styles.logoReactNative}>
                <FastImage source={ReactNative} style={styles.imageLogo} />
            </View>
            <FlatList 
                data={listView}
                keyExtractor={item=>item.id}
                numColumns={2}
                renderItem={({item}) => {
                    return(
                        <View style={styles.containerItems}>
                            <TouchableOpacity style={styles.boxItems} onPress={() => onpressHandle(item.nameNavigate)}>
                                <FastImage style={styles.icon} source={item.icon}/>
                                <Text style={styles.title}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    },
    logoReactNative:{
        marginBottom:20,
        backgroundColor:"#071f13"
    },
    containerItems:{
        width:SIZE.width/2 -30,
        height:100,
        marginBottom:10,
        marginHorizontal:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    boxItems:{
        borderRadius:16,
        height:"100%",
        // marginBottom:5,
        justifyContent:"center",
        alignItems:"center",
    },
    icon:{
        height:50,
        width:50,
    },
    title:{
        color:"black",
        fontSize:17,
        fontWeight:"bold",
        textAlign:"auto"
    },
    btnCheckbox:{
        backgroundColor:"#1273de",
        height:40,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        borderRadius: 8
    },
    imageLogo:{
        height:210,
        width:SIZE.width,
    },
    text:{
        marginHorizontal:10,
        color:"white",
        fontSize:15,
        fontWeight:"bold",
    },
})