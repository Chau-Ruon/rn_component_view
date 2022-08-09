import React,{useState} from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import {ShowAlert} from "../../component/Alert/ShowAlert";
import {AlertEmit} from "../../component/Alert/AlertEmit";
const Alert = () => {
    const [show,setShow] = useState(false);
    const buttons = [
        { text: 'Bỏ qua', onPress:()=> setShow(!show)},
        { text: 'Cập nhật',  }
    ]
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
            }} onPress={()=>  setShow(!show)}>
                <Text style={{
                    fontSize:17,
                    fontWeight:"bold",

                }}>showAlert</Text>                
            </TouchableOpacity>
            { show && <ShowAlert showAlert={show}  message= 'Bạn vui lòng chọn tối đa 10 tấm hình' title='Vui lòng thử lại' type='warning' button={buttons}/>}
        </View>
    )
}

export default Alert