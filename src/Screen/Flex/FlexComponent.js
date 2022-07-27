import React,{useState} from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native'

export const data = [
  {
    id:0,
    name: "AAA",
    price: "100,000",
    priceType: "VND",
    desc:"fsafsafasfsdfasfsfsdfasf"
  },
  {
    id:1,
    name: "DDD",
    price: "100,000",
    priceType: "VND",
    desc:"fsafsafasfsdfasfsfsdfasf"
  },
  {
    id:2,
    name: "EEE",
    price: "100,000",
    priceType: "VND",
    desc:"fsafsafasfsdfasfsfsdfasf"
  },
  {
    id:3,
    name: "WWW",
    price: "100,000",
    priceType: "VND",
    desc:"fsafsafasfsdfasfsfsdfasf"
  },
  {
    id:4,
    name: "QQQ",
    price: "100,000",
    priceType: "VND",
    desc:"fsafsafasfsdfasfsfsdfasf"
  },
]

const FlexComponent = () => {
  const [inputRateDesc,setInputRateDesc] = useState([]);
  const [inputCost,setInputCost] = useState([]);
  const renderItem = (item,index) => {
    return(
      <View style={styles.containerItem}>
          <View style={styles.boxInContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.rate}>
                  <View style={styles.boxRating}>
                      <View style={styles.viewRating}>
                          <Text style={styles.rateIt}>Rate it</Text>
                          {/* <Rating ratingCount={5} selectedColor={COLOR.neural} /> */}
                      </View>
                  </View>
                  {/* {console.log(`jaSGDsjd,`,item.desc)} */}
                  <TextInput 
                      style={styles.input}
                      value={item.desc}
                      placeholder="Please write your rating"
                      
                      multiline={true}
                      numberOfLines={4}
                  /> 
              </View>
          </View>
          <View style={styles.cost}>
              <Text style={styles.textCost}>Cost</Text>
              <TextInput
                  key={item.id}
                  style={styles.inputCost}
                  keyboardType={'decimal-pad'}
                  onChangeText={text => {
                      const newList = [...inputCost];
                      newList[index] = text;
                      setInputCost(newList);
                  }}
                  value={
                      inputCost[index] || inputCost[index] == "" ? 
                          inputCost[index] 
                      :
                          item.price
                  }
              />
              <Text style={styles.typeCost}>VND</Text>
          </View>
          <View style={{
              borderWidth:0.5,
              // borderColor:COLOR.primary24,
              marginHorizontal:20,
          }}></View>
      </View>
    )
  }

  return (
    <>
      <StatusBar backgroundColor={"red"} barStyle="dark-content" />
      <View style={{flex:1,}}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <SafeAreaView style={styles.safeAreaView}>
                <FlatList 
                  data={data}
                  keyExtractor={item=>item.id}
                  renderItem={({item,index}) => renderItem(item,index)}
                />
            <View style={styles.btnBottom}>
              <TouchableOpacity style={{
                alignItems:"center",
              }}>
                <Text>sdfsadf</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </View>
    </>
  )
}

export default FlexComponent

const styles = StyleSheet.create({
  safeAreaView:{
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  btnBottom:{
    backgroundColor:"red",
    width:"100%",
    height:100,
    justifyContent:"center",
    borderTopLeftRadius:16,
    borderTopRightRadius:16,
    position:"absolute",
    bottom:0,
  },
})