import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';

const CustomTextInput = ({value, onChangeText, placeholder, icon, type}) => {
  // const [text, setText] = useState(value);
  return (
    <View
      style={{
        width: '85%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
      }}>
      <Image source={icon} style={{width: 30, height: 30}} />
      <TextInput
        value={value}
        onChangeText={txt => {
          onChangeText(txt);
        }}
        placeholder={placeholder}      
        secureTextEntry={type == 'password' ? true : false}        
        style={{marginLeft: 10}}
      />
    </View>
  );
};

export default CustomTextInput;
