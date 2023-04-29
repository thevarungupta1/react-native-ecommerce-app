import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import CustomTextInput from '../common/CustomTextInput';
import CustomButton from '../common/CustomButton';
import { addAddress } from '../redux/actions/AddressAction';

const AddAddress = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState('');
  const [building, setBuilding] = useState('');
  const [pin, setPin] = useState('');
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 70,
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            marginLeft: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0.2,
            padding: 7,
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../images/back.png')}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
      </View>
      <CustomTextInput
        placeholder={'Enter City Name'}
        value={city}
        onChangeText={text => {
          setCity(text);
        }}
        icon={require('../images/buildings.png')}
      />

      <CustomTextInput
        placeholder={'Enter Building Name'}
        value={building}
        onChangeText={text => {
          setBuilding(text);
        }}
        icon={require('../images/buildings.png')}
      />

      <CustomTextInput
        placeholder={'Enter Pincode Name'}
        value={pin}
        onChangeText={text => {
          setPin(text);
        }}
        icon={require('../images/pin.png')}
      />
      <CustomButton
        title={'Save Address'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={() => {
          if(city !== '' && building !== '' && pin !== ''){
            dispatch(
              addAddress({city, building, pin})
            );
            navigation.goBack()
          }
        }}
      />
    </View>
  );
};

export default AddAddress;
