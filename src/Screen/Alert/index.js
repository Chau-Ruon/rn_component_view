import React,{useState} from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import {showAlert} from "../../component"

const Alert = () => {
    const [show,setShow] = useState(false);
    const showNotice = () => {
        setShow(!show);
        console.log(`SADFGADJSF: `,show);
        if (show) {
            showAlert({ title: 'Bạn vui lòng chọn tối đa 10 tấm hình', body: 'Vui lòng thử lại', type: 'warning' });
        }
    }
    return (
        <View style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }}>
            <TouchableOpacity style={{
                height:50,
                width:100,
                backgroundColor:"#00D084",
                justifyContent:"center",
                alignItems:"center",
                borderRadius:10,
            }} onPress={showNotice}>
                <Text style={{
                    fontSize:17,
                    fontWeight:"bold",

                }}>showAlert</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Alert