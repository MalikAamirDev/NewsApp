import React from 'react';
import {View, TextInput} from 'react-native';

const Input = ({
  style,
  placeholder,
  keyboardType,
  secureTextEntry,
  onChangeText,
  value,
}) => {
  return (
    <View>
      <TextInput
        value={value}
        keyboardType={keyboardType}
        style={style}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;
