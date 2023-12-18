import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  FlatList,
} from "react-native";
import { COLOR, SHADOWS, SIZE, TEXT } from "../../theme";
import { food1, food2, food3,food4,food5} from "../../assets/indexImage";


const carouselItems= [
  {
    id:1,
    image:food1,
    createAt: 1676965582,
    title:"ao",
    type: 1234,
  },
  {
    id:2,
    image:food2,
    createAt: 1676965582,
    title:"quan",
    type: 1,
  },
  {
    id:3,
    image:food3,
    createAt: 1676965582,
    title:"non",
    type: 2,
  },
  {
    id:4,
    image:food4,
    title:"ksadjfhoajkadkd",
    type: 3,
  },
  {
    id:5,
    image:food5,
    title:"ksadjfhoajkadkd",
    type: 4,
  },
  {
    id:6,
    image:food5,
    title:"ksadjfhoajkadkd",
    type: 4,
  },
  {
    id:7,
    image:food5,
    title:"ksadjfhoajkadkd",
    type: 4,
  },
  {
    id:8,
    image:food5,
    title:"ksadjfhoajkadkd",
    type: 4,
  },
  {
    id:9,
    image:food5,
    title:"ksadjfhoajkadkd",
    type: 4,
  },
  {
    id:10,
    image:food5,
    title:"ksadjfhoajkadkd",
    type: 4,
  },
  {
    id:11,
    image:food5,
    title:"ksadjfhoajkadkd",
    type: 4,
  },
  {
    id:12,
    image:food5,
    title:"ksadjfhoajkadkd",
    type: 4,
  },
  {
    id:13,
    image:food5,
    title:"ksadjfhoajkadkd",
    type: 4,
  },
  {
    id:14,
    image:food5,
    title:"ksadjfhoajkadkd",
    type: 4,
  },
];

export const MenuTowRow = () => {
  
  const _menuList = ({ item, index }:{item:any,index:number}) => {
    return (
      <TouchableOpacity style={{
        flexDirection:"row",
        // backgroundColor:"#fff",
      }} activeOpacity={0.65}  key={`${index}-cart`}>
        <View style={{
          margin:4,
          width:SIZE.width/7 + 1,
          backgroundColor:"#fff",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          elevation: 3,
          borderRadius:9,
        }}>
          <View style={{
            alignItems:"center",
            width:"100%",
            padding:5,
            borderRadius:9,
            backgroundColor: COLOR.white,
          }}>
            <Image style={{
              height:35,
              width:35,
            }}
              source={item.image}/>
            
            <Text numberOfLines={2} style={{
              textAlign:"center",
              ...TEXT.fz12,
              ...TEXT.medium,
              width:"100%",
            }}>
              {item.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return(
    <ScrollView 
      horizontal 
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={true}>
      <FlatList
        style={{paddingRight:5}}
        key={carouselItems.length + "cate"}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        numColumns={6}
        keyExtractor={(item) => item.id.toString()}
        data={carouselItems}
        scrollEnabled={false}
        renderItem={_menuList}
      />
    </ScrollView>
  )
}