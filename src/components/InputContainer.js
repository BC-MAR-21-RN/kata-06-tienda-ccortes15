import React from 'react';
import {TextInput, View} from 'react-native';
import CardView from 'react-native-cardview';
import {Icon} from '.';
import {styleInput} from '../library/styles';

const InputContainer = ({icon, ...rest}) => {
  return (
    <CardView cardElevation={5} cardMaxElevation={5} cornerRadius={5}>
      <View style={styleInput.container}>
        <Icon icon={icon} style={styleInput.icon} />
        <TextInput
          {...rest}
          style={styleInput.textInput}
          placeholderTextColor="#959EA6"
        />
      </View>
    </CardView>
  );
};

export default InputContainer;
