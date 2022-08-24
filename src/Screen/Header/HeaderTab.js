import React,{useRef,useEffect} from 'react'
import {
    View,
    Text,
    Animated,
    TouchableOpacity,
} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {HeaderHomeTab,HeaderSettingTab} from "../../component/HeaderTopTab/index"


const Tab = createMaterialTopTabNavigator();

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
    return (
        <View style={{
            flex:1
        }}>
            <View style={{
                backgroundColor:"rgba(184,0,0,0.15)",
                width:'100%',
                height:50,
            }}>

            </View>
            <View style={{
                // marginTop:0,
                flex:1,
                backgroundColor:"blue"
            }}>
                <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
                    <Tab.Screen key={'Home'} name="Home" component={HeaderHomeTab}  options={{ tabBarLabel: 'Home' }}/>
                    <Tab.Screen key={'Settings'} name="Settings" component={HeaderSettingTab}  options={{ tabBarLabel: 'Settings' }} />
                </Tab.Navigator>
            </View>
            <View style={{
                backgroundColor:"rgba(184,0,0,0.15)",
                width:'100%',
                height:100,
            }}>

            </View>
        </View>
    )
}

export default HeaderTab