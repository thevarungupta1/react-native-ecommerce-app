import {View, Text, Image, TextInput, Button} from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CustomButton from '../common/CustomButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const saveData = async () => {
    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('PASSWORD', password);
    navigation.goBack()
  };

  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../images/logo.jpg')}
        style={{width: 60, height: 60, alignSelf: 'center', marginTop: 100}}
      />
      <Text
        style={{
          marginTop: 50,
          alignSelf: 'center',
          fontSize: 30,
          fontWeight: '600',
          color: '#000',
        }}>
        Register
      </Text>

      <CustomTextInput
        placeholder={'Enter Name'}
        value={name}
        onChangeText={val => {
          setName(val);
        }}
        icon={require('../images/mail.png')}
      />

      <CustomTextInput
        placeholder={'Enter Email Id'}
        value={email}
        onChangeText={val => {
          setEmail(val);
        }}
        icon={require('../images/mail.png')}
      />

      <CustomTextInput
        placeholder={'Enter password'}
        type={'password'}
        value={password}
        onChangeText={val => {
          setPassword(val);
        }}
        icon={require('../images/padlock.png')}
      />

      <CustomButton
        title={'Register'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={() => {
          saveData()
        }}
      />

      <Text
        style={{
          fontSize: 18,
          fontWeight: '800',
          alignSelf: 'center',
          marginTop: 20,
          textDecorationLine: 'underline',
        }}
        onPress={() => {
          
          //navigation.navigate('Login');
       
        }}>
        Already have Account
      </Text>
    </View>
  );
};

export default Register;
