import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
} from 'react-native'
import React,{
    useEffect,
    useState,
    useRef,
} from 'react';

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
    {
        id:6,
        name:"metime",
        price: "55,000",
        typePrice: "VND",
        desc:"if can be change time to 5pm, i can 8K"
    },
]

const CheckBoxItem = (props) => {
    const {
        style = {},
        color = "",
        borderWidth = undefined,
        onChange,
        isChecked,
        values,
    } = props

    console.log(`isChecked: ${JSON.stringify(isChecked)}`);

    return (
        <View>
            <TouchableOpacity 
                activeOpacity={1}
                style={{
                    justifyContent:"center",
                    alignItems:"center",
                }}
                onPress={onChange}
            >
                <View style={[
                    {
                        justifyContent:"center",
                        alignItems: "center",
                        borderWidth: borderWidth,
                        borderRadius:50,
                        borderColor: color
                    },
                    style
                ]}>
                    {
                        isChecked ? 
                            <View style={
                                    [
                                        {
                                            
                                            height: style.height/ 2,
                                            width: style.width/ 2,
                                            borderRadius:50,
                                            backgroundColor: color,
                                        }
                                    ]
                                }>

                                
                            </View>
                            : null
                    }
                </View>
            </TouchableOpacity>
        </View>
    );
};

const CheckboxArray = (props) => {
    const {
        borderColor,
    } = props
    const [isChecked, setIsChecked] = React.useState(DATA.map(() => false));
    const [values, setValues] = React.useState(false);
    const onChange = (index) => {
        console.log('>>>>>>>>>>>>>> idx ', index);
        isChecked[index] = !isChecked[index];
        setIsChecked([...isChecked]);
        setValues(index)
    }    
    console.log('>>>>>>>>>>>>>>>>>>>> ', isChecked)
    return (
        <View style={styles.container}>
            <FlatList 
                data={DATA}
                keyExtractor={item => item.id}
                renderItem = {({item, index})=>
                    <View style={{
                        flexDirection:"row",
                        marginTop:5,
                    }}>
                        <CheckBoxItem
                            key={`${index}`}
                            color={"#db3e00"}
                            borderWidth={2}
                            values={values}
                            onChange={() => onChange(index)}
                            isChecked={isChecked[index]}
                            style={styles.containerItem}
                        />
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    </View>
                }
            />
        </View>
    )
}

export default CheckboxArray

const styles = StyleSheet.create({
    containerItem: {
        height: 20,
        width:20,
        marginRight:10,
    },
    container: {
        height: "100%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      },

});