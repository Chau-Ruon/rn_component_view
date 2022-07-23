import { 
    View,
    Text,
    ScrollView,
    FlatList,
    TextInput,
    StyleSheet,
} from 'react-native'
import React,{useState,useEffect} from 'react'


export const DATA = [
  {
      id:1,
      name:"QQQ",
      price: "48,000",
      typePrice: "VND",
      desc:"I has experience about delivery"
  },
  {
      id:2,
      name:"AAA",
      price: "47,000",
      typePrice: "VND",
      desc:"if can be change time to 5pm, i can 8K"
  },
  {
      id:3,
      name:"ZZZ",
      price: "50,000",
      typePrice: "VND",
      desc:"i has experience about delivery and fgdhfg ghfgh"
  },
  {
      id:4,
      name:"SSS",
      price: "50,000",
      typePrice: "VND",
      desc:"I has experience about delivery"
  },
  {
      id:5,
      name:"EEE",
      price: "52,000",
      typePrice: "VND",
      desc:"if can be change time to 5pm, i can 8K"
  },
]

const InputFlatlistScreen = () => {
    const [inputsPrice,setInputsPrice] = useState([]);
    const [inputsDecs,setInputsDecs] = useState([]);
    
    const renderItem = (item,index) => {
        console.log(`inputsPrice`,inputsPrice);
        return(
            <View style={styles.container}>
                <View style={styles.boxItem}>
                    <Text style={styles.textName}>{item.name}</Text>
                    <View style={styles.desc}>
                        <Text style={styles.titleDesc}>Describe</Text>
                        <TextInput
                            value={item.desc}
                            style={styles.inputDesc}
                            onChangeText={text => {
                                inputs[index] = text;
                                
                            }}
                        />
                    </View>
                    <View style={styles.price}>
                        <Text style={styles.titleDesc}>Price</Text>
                        <TextInput
                            key={index}
                            value=
                            { 
                                inputsPrice[index] || inputsPrice[index] == "" ? 
                                    inputsPrice[index] 
                                :
                                    item.price
                            }
                            style={styles.inputPrice}
                            onChangeText={text => {
                                // inputsPrice[index] = text;
                                // setInputsPrice(...inputsPrice[index])
                                const newList = [...inputsPrice]
                                newList[index] = inputsPrice;
                                setInputsPrice(newList)
                            }}
                        />
                    </View>
                </View>
            </View>
        )
    }

    return (
        <>
            <FlatList
                style={{marginTop:10,}}
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem = {({item,index}) => renderItem(item,index)}
            />
        </>
    )
}

export default InputFlatlistScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        marginBottom:5,
        marginHorizontal:10,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        
    },
    boxItem:{
        marginHorizontal:10,
    },
    desc:{
        flexDirection:"row",
        alignItems:"center",
    },
    price:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:10,
    },
    titleDesc:{
        fontSize:14,
        // fontWeight:"bold",
        paddingHorizontal:10,
    },
    inputDesc:{
        borderWidth:1,
        borderRadius:10,
        width:280,
    },
    titleName:{
        fontSize:14,
        // fontWeight:"bold",
        marginLeft:6,
    },
    textName:{
        marginTop:6,
        fontSize:14,
        fontWeight:"bold",
        marginLeft:6,
    },
    inputPrice:{
        borderWidth:1,
        borderRadius:10,
    },
})