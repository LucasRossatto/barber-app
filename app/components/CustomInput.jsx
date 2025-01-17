import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

function CustomInput({
  placeholder,
  placeholderColor,
  borderColor,
  textColor,
  keyboardType,
  secureTextEntry,
}) {
  const placeholderColorValue = placeholderColor || '#000';
  const textColorValue = textColor || '#000';
  const borderColorValue = borderColor || '#D1D5DB';
  const keyboardTypeValue = keyboardType || 'default';

  return (
    <TextInput
      style={[styles.input, { borderColor: borderColorValue, color: textColorValue }]}
      placeholder={placeholder}
      placeholderTextColor={placeholderColorValue}
      keyboardType={keyboardTypeValue}
      secureTextEntry={secureTextEntry} 
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 20,
    padding: 10,
  },
});

export default CustomInput;
