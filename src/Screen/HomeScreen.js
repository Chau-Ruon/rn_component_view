import React from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    FlatList,
    Dimensions,
    Image,
} from 'react-native'
import {
    ReactNative,
    RocketIcons,
} from './../assets/index'
import FastImage from 'react-native-fast-image';

const {width, height} = Dimensions.get("window");

export const listView = [
    {
        id:1,
        name:"Checkbox",
        nameNavigate:"Checkbox",
        icon: RocketIcons,
    },
    {
        id:2,
        name:"InputFlatlist",
        nameNavigate:"InputFlatlist",
        icon: RocketIcons,
    },
    {
        id:3,
        name:"InputFomik",
        nameNavigate:"InputFomik",
        icon: RocketIcons,
    },
    {
        id:4,
        name:"FlexComponent",
        nameNavigate:"FlexComponent",
        icon: RocketIcons,
    },
    {
        id:5,
        name:"BottomSheet",
        nameNavigate:"BottomSheet",
        icon: RocketIcons,
    },
    {
        id:6,
        name:"OrtherBottomSheet",
        nameNavigate:"OrtherBottomSheet",
        icon: RocketIcons,
    },
    {
        id:7,
        name:"Map View",
        nameNavigate:"MapView",
        icon: RocketIcons,
    },
    {
        id:8,
        name:"Show Alert",
        nameNavigate:"ShowAlert",
        icon: RocketIcons,
    },
]

export const HomeScreen = ({navigation}) => {
    const onpressHandle = (nameNavigate) => { 
        navigation.navigate(nameNavigate)
    }
    return (
        <View style={{
            flex: 1,
            justifyContent:"center",
            alignItems:"center",
        }}>
            <View style={
                {
                    marginBottom:20,
                    backgroundColor:"#071f13"
                }
            }>
                <FastImage source={ReactNative} style={styles.imageLogo} />
            </View>
            <FlatList 
                data={listView}
                keyExtractor={item=>item.id}
                numColumns={2}
                renderItem={({item}) => {
                    return(
                        <View style={{
                            width:width/2 -30,
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
                        }}>
                            <TouchableOpacity style={
                                {
                                    borderRadius:16,
                                    height:"100%",
                                    // marginBottom:5,
                                    justifyContent:"center",
                                    alignItems:"center",
                                }
                            } onPress={() => onpressHandle(item.nameNavigate)}>
                                <FastImage style={
                                    {
                                        height:50,
                                        width:50,
                                    }
                                } source={item.icon}/>
                                <Text style={
                                    {
                                        color:"Black",
                                        fontSize:17,
                                        fontWeight:"bold",
                                    }
                                }>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
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
    imageLogo:{
        height:210,
        width:width,
    },
    text:{
        marginHorizontal:10,
        color:"white",
        fontSize:15,
        fontWeight:"bold",
    },
})