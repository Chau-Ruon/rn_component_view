import React from 'react';
import {View, Text, Dimensions} from 'react-native';
// import {height, width} from 'react-native-dimension';
import moment from 'moment';
import {transparent} from 'react-native-paper/lib/typescript/styles/colors';

const {height, width} = Dimensions.get('window');

const DashedCard = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          alignSelf: 'center',
          // height: height(80),
          // width: width(90),
          // marginTop: width(20),
          height: height,
          width: width,
          // marginTop: 120,
        }}>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'grey',
          }}>
          <View
            style={{
              alignSelf: 'center',
              // height: height(27),
              // width: width(80),
              // borderRadius: width(4),
              // marginTop: width(20),
              height: 397,
              width: 320,
              borderRadius: 8,
              margin: 20,
              // backgroundColor: 'white',
              backgroundColor: 'grey',
            }}>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <View>
                <Text style={{fontWeight: 'bold', padding: 10}}>CODE200</Text>
              </View>
              <View
                style={{
                  alignSelf: 'flex-end',
                  // marginTop: height(7),
                  marginTop: 27,
                  padding: 10,
                }}>
                <Text style={{textAlign: 'right'}}>Valid Till</Text>
                <Text style={{textAlign: 'right'}}>
                  {moment().format('dddd, MMMM Do YYYY')}
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  // height: height(4),
                  // width: width(8),
                  // borderRadius: width(10),
                  height: 24,
                  width: 24,
                  marginRight: 10,
                  borderRadius: 50,
                  backgroundColor: 'white',
                }}
              />
              <Text style={{color: 'grey'}}>
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - -
              </Text>
              <View
                style={{
                  // height: height(4),
                  // width: width(8),
                  // borderRadius: width(10),
                  height: 14,
                  width: 14,
                  borderRadius: 10,
                  backgroundColor: 'white',
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <View>
                <Text style={{textAlign: 'left'}}>APPLICABLE ON</Text>
                <Text style={{textAlign: 'left'}}>Today</Text>
              </View>
              <View style={{alignSelf: 'flex-end'}}>
                <Text style={{fontWeight: 'bold', textAlign: 'right'}}>
                  Rs: 200/-
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DashedCard;
