import React,{useRef,useState,useEffect} from 'react'
import {
    View,
    Text,
    Animated,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {HeaderHomeTab,HeaderSettingTab} from "../../component/HeaderTopTab/index"
import {DraggableBottomView} from '../../component/index'

const Tab = createMaterialTopTabNavigator();

const {width,height} = Dimensions.get("window");

const  MyTabBar = ({ state, descriptors, navigation, position }) => {
    const AnimatedValue = useRef(new Animated.Value(0)).current;

    const Spring = () => {
        
    }

    return (
        <View style={{ 
                flexDirection: 'row',
                marginHorizontal:20,
                height:40,
                backgroundColor:"rgba(0, 38, 101, 0.24)",
                borderRadius:16,
            }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;
        
                const isFocused = state.index === index;
        
                const onPress = () => {
                    if (!isFocused) {
                        console.log(`sfasdf`);
                        navigation.navigate(route.name);
                    }
                };
        
                const onLongPress = () => {
                    navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                    });
                };
                // modify inputRange for custom behavior
                // const inputRange = state.routes.map((_, i) => i);
                // const opacity = AnimatedValue.interpolate( {
                //     inputRange,
                //     outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
                // });
    
            return (
                <TouchableOpacity
                    // key={index}
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style={
                        [
                            { 
                                flex: 1,
                                alignItems:"center",
                                justifyContent:"center",
                            },
                            isFocused ? {
                                borderRadius:16,
                                backgroundColor:"#002665"
                            } : null
                        ]
                    }
                >
                <Animated.Text style={[
                    isFocused ? {
                        color:"#fff",
                    } : {
                        color:"#a0a09f"
                    }
                    ]}>{label}</Animated.Text>
                </TouchableOpacity>
            );
            })}
        </View>
    );
}

const HeaderTab = () => {
    const [show,setShow] = useState(false);
    const [show1,setShow1] = useState(false);

    return (
        <View style={{flex:1,}}>
            <View style={styles.header}>

            </View>
            <View style={{flex:1,}}>
                <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
                    <Tab.Screen key={'Home'} name="Home" component={HeaderHomeTab}  options={{ tabBarLabel: 'Home' }}/>
                    <Tab.Screen key={'Settings'} name="Settings" component={HeaderSettingTab}  options={{ tabBarLabel: 'Settings' }} />
                </Tab.Navigator>
            </View>
            <View style={styles.contaiterButton}>
                <View style={styles.boxButton}>
                    <TouchableOpacity onPress={() => setShow(false)} style={styles.btnBottomClose} >
                        <Text style={styles.txtButton}>Close</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShow(true)} style={styles.btnBottomCloseRecruitment}>
                        <Text style={styles.txtButton}>Close Recruitment</Text>
                    </TouchableOpacity>
                </View>
                <DraggableBottomView active={show} hideBottomSheet={setShow}>
                    <View style={{height:"100%"}}>
                        <View style={styles.BottomSheetHeader}>
                            <Text style={styles.title}>Notice</Text>
                            <View style={styles.hr}/>
                        </View>
                        <View style={styles.BottomBody}>
                            <Text>Are you sure you want to close recruitment?</Text>
                        </View>
                        <View style={styles.BottomSheetButton}>
                            <TouchableOpacity onPress={() => setShow(false)} style={styles.btnBottomClose} >
                                <Text style={styles.txtButton}>Close</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setShow1(true)} style={styles.btnBottomCloseRecruitment}>
                                <Text style={styles.txtButton}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </DraggableBottomView>
                <DraggableBottomView active={show1} hideBottomSheet={setShow1}>
                    <View style={{height:"100%"}}>
                        <View style={styles.BottomSheetHeader}>
                            <Text style={styles.title}>Notice</Text>
                            <View style={styles.hr}/>
                        </View>
                        <View style={styles.BottomBody}>
                            <Text>"metime", "aaa"{"\n"}
                                Do you want to decide as that user?</Text>
                        </View>
                        <View style={styles.BottomSheetButton}>
                            <TouchableOpacity onPress={() => setShow1(false)} style={styles.btnBottomClose} >
                                <Text style={styles.txtButton}>Close</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setShow1(true)} style={styles.btnBottomCloseRecruitment}>
                                <Text style={styles.txtButton}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </DraggableBottomView>
            </View>
        </View>
    )
}

const widthButton = width/2 -20
const heightButton = 40;

const styles = StyleSheet.create({
    header:{
        backgroundColor:"rgba(184,0,0,0.15)",
        width: width,
        height:50,
    },
    contaiterButton:{
        backgroundColor:"#FFFFFF",
        height:80,
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
    },
    boxButton:{
        marginTop:20,
        marginHorizontal:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    btnBottomClose:{
        height: heightButton,
        width: widthButton,
        backgroundColor:"red",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:16,
    },
    btnBottomCloseRecruitment:{
        height: heightButton,
        width:widthButton,
        backgroundColor:"#002665",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:16,
    },
    txtButton:{
        fontSize:14,
        fontWeight:"600",
        color:"#fff"
    },
    BottomSheetHeader:{
        alignItems:"center",
        // height:"100%",
    },
    title:{
        fontSize:14,
        color:"#011E32",
        fontWeight:'900',
    },
    BottomBody:{
        alignItems:"center",
    },
    BottomSheetButton:{
        position:"absolute",
        bottom:90,
        width: width - 30,
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:10,
        justifyContent:"space-between",
        // backgroundColor:'red'
    },
    hr: {
		borderBottomWidth: 1,
		borderColor: 'rgba(0, 38, 101, 0.24)',
		marginVertical: 10,
        width: width-30,
		marginHorizontal:15,
	},
})

export default HeaderTab