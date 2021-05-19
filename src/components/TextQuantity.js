import React from 'react';
import {Text, View} from 'react-native';
import {styleRowContainer} from '../library/styles';

const TextQuantity = ({quant, measure, style}) => {
  return (
    <View style={styleRowContainer.rowContainer}>
      <Text style={style.quant}>
        {quant}
        {measure === 'p' && '/'}
      </Text>
      <Text style={style.text}>{measure}</Text>
    </View>
  );
};

export default TextQuantity;
