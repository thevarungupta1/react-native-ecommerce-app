import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  useWindowDimensions,
  StyleSheet
} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CustomButton from '../common/CustomButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);

  const validate = () => {
    if (email == '') {
      setBadEmail(true);
    } else {
      setBadEmail(false);
    }
    if (password == '') {
      setBadPassword(true);
    } else {
      setBadPassword(false);
    }
    login()
  };

  const login = async () => {
    const saveEmail = await AsyncStorage.getItem('EMAIL');
    const savePassword = await AsyncStorage.getItem('PASSWORD');
    if(saveEmail === email && savePassword === password){
      navigation.navigate('Home')
    }
  }

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
        Login
      </Text>
      <CustomTextInput
        placeholder={'Enter Email'}
        icon={require('../images/mail.png')}
        value={email}
        onChangeText={txt => {
          setEmail(txt);
        }}
      />
      {badEmail == true && (
        <Text style={{marginTop: 10, alignSelf: 'center', color: 'red'}}>
          Please enter email id
        </Text>
      )}

      <CustomTextInput
        placeholder={'Enter password'}
        type={'password'}
        icon={require('../images/padlock.png')}
        value={password}
        onChangeText={txt => {
          setPassword(txt);
        }}
      />
      {badPassword == true && (
        <Text style={{marginTop: 10, alignSelf: 'center', color: 'red'}}>
          Please enter password
        </Text>
      )}

      <CustomButton
        title={'Login'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={() => {
          validate();
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
          navigation.navigate('Register');
        }}>
        Create New Account
      </Text>
    </View>
  );
};

export default Login;


