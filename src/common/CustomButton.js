import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({title, bgColor, onPress, textColor}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 50
      }}
      onPress={() => {
        onPress();
      }}>
      <Text style={{color: textColor}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
