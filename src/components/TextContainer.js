import React from 'react';
import {Text, View} from 'react-native';

const TextContainer = ({styleView, styleText, text}) => {
  return (
    <View style={styleView}>
      <Text style={styleText}>{text}</Text>
    </View>
  );
};

export default TextContainer;
