import React,{useState,useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Rating } from '../../component';

const Custom = () => {
  const [point,setPoint] = useState(undefined);
  
  const [ratingValues, setRatingValues] = useState([]);

  const updateResult = (index, key, value,) => {
    // func này đánh giá theo mảng khi cso nhiều thứ cần đánh giá cũng 1 lúc
    // ==========================****~~*****===========================

    // let newResult = [...result];
    // if(newResult.length === 0){
    //   newResult = dataDetail.map(item => {
    //     return {
    //       participationNumber: item.participationNumber,
    //       currency,
    //       cost: item.cost,
    //     };
    //   })
    // }
    // newResult[index][key] = value;
    // setResult([...newResult ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.ratingBox}>
        <View style={styles.rating}>
          <Text style={styles.title}>Nhập sao cần đánh giá</Text>
          <Rating
            ratingCount={5}
            setRatingValues={(value) => {
              if (typeof value === "undefined") return;
              setPoint(value);
              
              // func dưới gọi khi đánh giá với số lượng nhiều
                // updateResult(index,"point",value)
              // ====================~*****~======================
            }}
            ratingValues={ratingValues}
          />
        </View>
        <View style={styles.rated}>
          <Text style={styles.title}>Sao đã đánh giá</Text>
          <Rating
            ratingCount={5}
            setRatingValues={(value) => {
              if (typeof value === "undefined") return;
            }}
            HadStar={point}
          />
          <Text style={styles.decs}>Mô tả: Sau khi đánh giá sao ở trên, những diểm sao đã đánh sẽ được cập nhập sao ở dưới{"\n"}
            <Text style={{fontWeight:"bold"}}>
              (không được chỉnh sửa)
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent:"center",
    height:"100%"
  },
  ratingBox:{
    height:"20%",
    justifyContent:"space-between",
  },
  title:{
    fontSize:15,
    fontWeight:"900",
  },
  rating: {
    alignItems:"center",
    justifyContent:"center",
  },
  rated:{
    alignItems:"center",
    justifyContent:"center",
  },
  decs:{
    flexWrap: 'wrap',
    alignItems:"center",
    textAlign:"center",
    width:"35%",
    marginTop:10
  }
})

export default Custom;
