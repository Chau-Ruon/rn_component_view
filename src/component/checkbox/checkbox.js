import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import React,{
    useEffect,
    useState,
    useRef,
} from 'react'

const CheckBoxItem = (props) => {
    const {
        style = {},
        color = "",
        borderWidth = undefined,
        onChange,
        checked
    } = props
    const [isChecked, setIsCheck] = useState(false);
    React.useEffect(() => {
        setIsCheck(checked);
    }, []);
    // console.log('>>>>>>>>>>>>>>>> isChecked ', isChecked)
    const onChecked = () => {
        const chk = !isChecked;
        setIsCheck(chk);
        onChange(chk);
    }

    return (
        <>
            <TouchableOpacity 
                activeOpacity={1}
                style={{
                    justifyContent:"center",
                    alignItems:"center",
                }}
                onPress={onChecked}
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

const Checkbox = (props) => {
    const {
        borderColor,
    } = props
    // const [music, setMusic] = useState(false);
    // const [isChecked, setIsChecked] = React.useState([false, false, false, false]);

    // const onChange = (index) => {
    //     isChecked[index] = !isChecked[index];
    //     setIsChecked([...isChecked]);
    // }    
    // console.log('>>>>>>>>>>>>>>>>>>>> ', isChecked)
    // return (
    //     <View style={styles.container}>
    //         {
    //         isChecked.map((item, idx) => {
    //             return (
    //                 <CheckBoxItem
    //                 key={`${idx}`}
    //                 color={"#db3e00"}
    //                 borderWidth={2}
    //                 onChange={() => onChange(idx)}
    //                 isChecked={item}
    //                 style={styles.containerItem}
    //               />
    //             );
    //         })}
    //     </View>
    // )

    const [isChecked, setIsCheck] = React.useState(true);
    console.log('>>>>>>>>>>>>>>>> ', isChecked);

    return (
        <View style={styles.container}>
            <CheckBoxItem
                color={"#db3e00"}
                borderWidth={2}
                onChange={check => setIsCheck(check)}
                checked={isChecked}
                style={styles.containerItem}
            />
        </View>
    );

}

export default Checkbox

const styles = StyleSheet.create({
    containerItem: {
        height: 20,
        width:20,
    },
    container: {
        height: "100%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      },

});