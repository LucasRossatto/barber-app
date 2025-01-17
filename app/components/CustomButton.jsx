import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function CustomButton({ onPress, title, alertText, color, textColor }) {
  const buttonColor = color || '#4CAF50';
  const textColorValue = textColor || '#fff'; 

  if (!title) {
    console.warn('O título do botão não foi fornecido!');
    return null; 
  }

  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: buttonColor }]}
      onPress={() => {
        if (alertText) {
          alert(alertText);
        }
        if (onPress) {
          onPress();
        }
      }}
    >
      <Text style={[styles.btnText, { color: textColorValue }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginVertical: 20,
    width:"100%",
    borderWidth: 2,
    borderColor: '#000',
  },
  btnText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CustomButton;