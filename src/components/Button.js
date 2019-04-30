import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ButtonStyles, TextStyles} from '../styles/Buttons';
import {Alert} from 'react-native';

const fetchLocation = props => {
  
  const buttonStyle = ButtonStyles[props.styleType];
  const textStyle = TextStyles[props.styleType];

  return (
    <TouchableOpacity style={[ButtonStyles.button, buttonStyle]} onPress={() => {
      Alert.alert('You tapped the ' + props.styleType + ' Button!');
    }}>
      <Text style={textStyle}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default fetchLocation;
