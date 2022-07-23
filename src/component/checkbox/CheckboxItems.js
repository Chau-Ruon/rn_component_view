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
    {
        id:7,
        name:"metime",
        price: "55,000",
        typePrice: "VND",
        desc:"if can be change time to 5pm, i can 8K"
    },
    {
        id:8,
        name:"metime",
        price: "55,000",
        typePrice: "VND",
        desc:"if can be change time to 5pm, i can 8K"
    },
    {
        id:9,
        name:"metime",
        price: "55,000",
        typePrice: "VND",
        desc:"if can be change time to 5pm, i can 8K"
    },
    {
        id:10,
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
        isChecked
    } = props
    // const [isChecked, setIsCheck] = useState(false);
    /**
     * Cách viết thứ 2 cho một item
     * onChecked()
     */
    // React.useEffect(() => {
    //     setIsCheck(checked);
    // }, []);
    // const onChecked = () => {
    //     const chk = !isChecked;
    //     setIsCheck(chk);
    //     onChange(chk);
    // }

    console.log(`isChecked: ${JSON.stringify(isChecked)}`);

    return (
        <>
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
                            }/>
                        : null
                    }
                </View>
            </TouchableOpacity>
        </>
    );
};

const CheckboxItems = (props) => {
    const {
        borderColor,
    } = props
    /**
     * Cách viết thú nhất cho nhiều item trong mảng
     * 
     */
    const [isChecked, setIsChecked] = React.useState([false, false, false, false]);
    const onChange = (index) => {
        isChecked[index] = !isChecked[index];
        setIsChecked([...isChecked]);
    }    
    console.log('>>>>>>>>>>>>>>>>>>>> ', isChecked)
    return (
        <View style={styles.container}>
            {/* /**
                * Cách viết thú nhất cho nhiều item trong mảng
            */}
            {
                isChecked.map((item, idx) => {
                    return (
                        <CheckBoxItem
                        key={`${idx}`}
                        color={"#db3e00"}
                        borderWidth={2}
                        onChange={() => onChange(idx)}
                        isChecked={item}
                        style={styles.containerItem}
                    />
                    );
                })
            }
        </View>
    )


    /**
     * Cách viết thứ 2 cho một item
     */
    // const [isChecked, setIsCheck] = React.useState(true);
    // console.log('>>>>>>>>>>>>>>>> ', isChecked);

    // return (
    //     <View style={styles.container}>
    //         <CheckBoxItem
    //             color={"#db3e00"}
    //             borderWidth={2}
    //             onChange={check => setIsCheck(check)}
    //             checked={isChecked}
    //             style={styles.containerItem}
    //         />
    //     </View>
    // );

}

export default CheckboxItems

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