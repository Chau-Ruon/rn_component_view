import { 
    View,
    Text,
    ScrollView,
    FlatList,
} from 'react-native'
import React from 'react'

import {
    Checkbox,
    CheckboxArray,
    TCheckbox,
} from "../../component"


export const DATA = [
  {
      id:1,
      name:"metime",
      price: "48,000",
      typePrice: "VND",
      desc:"I has experience about delivery"
  },
  {
      id:2,
      name:"metime",
      price: "47,000",
      typePrice: "VND",
      desc:"if can be change time to 5pm, i can 8K"
  },
  {
      id:3,
      name:"metime",
      price: "50,000",
      typePrice: "VND",
      desc:"i has experience about delivery and fgdhfg ghfgh"
  },
  {
      id:4,
      name:"metime",
      price: "50,000",
      typePrice: "VND",
      desc:"I has experience about delivery"
  },
  {
      id:5,
      name:"metime",
      price: "52,000",
      typePrice: "VND",
      desc:"if can be change time to 5pm, i can 8K"
  },
]

const CheckboxScreen = () => {
  return (
    <View style={{
      flex:1,
    }}>
      <ScrollView>
        <View style={{
          flex:1,
          backgroundColor:"#fad0c3",
          height:"100%",
        }}>
          {/* <View style={{
            backgroundColor:"#008b02",
            height:120,
          }}>
            <Checkbox/>
          </View> */}
          <View style={{
            backgroundColor:"#008b02"
          }}>
            {/* <CheckboxArray/> */}
          </View>
          <View style={{
            backgroundColor:"#008b02",
            // height:"100%",
          }}>
            <FlatList
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem = {({item,index}) => {
                return(
                  <View style={{
                    flexDirection:"row",
                  }}>
                    <TCheckbox 
                      borderStyle={{
                        height:30,
                        width:30,
                        borderRadius:0,
                      }}
                      label= {item.name}
                      labelStyle={{
                        fontSize:20,
                      }}
                    />
                  </View>
                )
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default CheckboxScreen