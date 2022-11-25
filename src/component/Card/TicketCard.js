import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import PropTypes from 'prop-types';
// import Colors from '../../../Themes/Colors';
// import Fonts from '../../../Themes/Parser/Fonts'
// import BlackTieIcons from '../../../Config/BlackTie/BlackTieIcons';
// import AttendeeList from '../Lists/AttendeeList';

const lightPink = '#fa82e4';
const cloudyBlue = '#d9e3f0';
const banner = '#35383d';

const TicketCard = ({eventTitle, location, time, navigate, attendees}) => {
  return (
    <TouchableOpacity onPress={() => navigate('Tickets')}>
      <View style={[{alignItems: 'center'}]}>
        <View style={styles.cardStyles}>
          <Svg
            width="345"
            height="185"
            viewBox="0 45 350 185"
            style={[
              {transform: [{rotate: '3deg'}], elevation: 4, borderRadius: 10},
            ]}>
            <Path
              fill={'#fff'}
              fillRule={'evenodd'}
              d={
                'M5,116.005446 L5,51 C5,48.2385763 7.23857625,46 10,46 L345,46 C347.761424,46 350,48.2385763 350,51 L350,116.005446 C337.804495,116.271345 328,126.240691 328,138.5 C328,150.759309 337.804495,160.728655 350,160.994554 L350,226 C350,228.761424 347.761424,231 345,231 L10,231 C7.23857625,231 5,228.761424 5,226 L5,160.994554 C17.1955053,160.728655 27,150.759309 27,138.5 C27,126.240691 17.1955053,116.271345 5,116.005446 Z'
              }
            />
          </Svg>
        </View>
        <View style={styles.cardStyles}>
          <Svg
            width="345"
            height="185"
            viewBox="0 45 350 185"
            style={[
              {transform: [{rotate: '-3deg'}], elevation: 4, borderRadius: 10},
            ]}>
            <Path
              fill={'#fff'}
              fillRule={'evenodd'}
              d={
                'M5,116.005446 L5,51 C5,48.2385763 7.23857625,46 10,46 L345,46 C347.761424,46 350,48.2385763 350,51 L350,116.005446 C337.804495,116.271345 328,126.240691 328,138.5 C328,150.759309 337.804495,160.728655 350,160.994554 L350,226 C350,228.761424 347.761424,231 345,231 L10,231 C7.23857625,231 5,228.761424 5,226 L5,160.994554 C17.1955053,160.728655 27,150.759309 27,138.5 C27,126.240691 17.1955053,116.271345 5,116.005446 Z'
              }
            />
          </Svg>
        </View>
        <View style={styles.cardStyles}>
          <Svg
            width="345"
            height="185"
            viewBox="0 45 350 185"
            style={{elevation: 4, borderRadius: 10}}>
            <Path
              fill={'#fff'}
              fillRule={'evenodd'}
              d={
                'M5,116.005446 L5,51 C5,48.2385763 7.23857625,46 10,46 L345,46 C347.761424,46 350,48.2385763 350,51 L350,116.005446 C337.804495,116.271345 328,126.240691 328,138.5 C328,150.759309 337.804495,160.728655 350,160.994554 L350,226 C350,228.761424 347.761424,231 345,231 L10,231 C7.23857625,231 5,228.761424 5,226 L5,160.994554 C17.1955053,160.728655 27,150.759309 27,138.5 C27,126.240691 17.1955053,116.271345 5,116.005446 Z'
              }
            />
          </Svg>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            marginTop: 2,
            width: '77.5%',
            marginLeft: 5,
          }}>
          <View
            style={{
              width: '80%',
              height: '100%',
            }}>
            <View
              style={{
                height: '30%',
                justifyContent: 'center',
                // borderBottomColor: Colors.lightPink,
                borderBottomColor: lightPink,
                borderBottomWidth: 0.5,
              }}>
              <Text
                style={{
                  // fontFamily: Fonts.Bebas,
                  fontSize: 25,
                }}>
                {eventTitle}
              </Text>
            </View>
            <View style={{height: '40%', justifyContent: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 8,
                }}>
                {/* <BlackTieIcons name={'uniF0CA'} type={'regular'} color={Colors.cloudyBlue} size={16}
                               containerStyle={{width: 19}} iconStyle={{paddingLeft: 1}}/> */}
                <Text
                  style={{
                    //   fontFamily: Fonts.Bebas,
                    fontSize: 18,
                    // color: Colors.cloudyBlue,
                    color: cloudyBlue,
                  }}>
                  {location}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 8,
                }}>
                {/* <BlackTieIcons
                  name={'uniF019'}
                  type={'regular'}
                  color={Colors.cloudyBlue}
                  size={15}
                  containerStyle={{width: 19}}
                /> */}
                <Text
                  style={{
                    //   fontFamily: Fonts.BebasRegular,
                    fontSize: 18,
                    marginBottom: -5,
                    // color: Colors.cloudyBlue,
                    color: cloudyBlue,
                  }}>
                  {time}
                </Text>
              </View>
            </View>
            <View
              style={{
                height: '30%',
                justifyContent: 'center',
                borderTopColor: lightPink,
                borderTopWidth: 0.5,
              }}>
              {/* <AttendeeList attendeeList={attendees} attendeeExtra={10} /> */}
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    shadowColor: banner,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    width: 350,
  },
});

TicketCard.propTypes = {
  eventTitle: PropTypes.string.isRequired,
};

export default TicketCard;
