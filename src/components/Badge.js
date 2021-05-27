import React from 'react';
import {Text, View} from 'react-native';
import {styleBadge} from '../library/styles';

const Badge = ({quant, measure}) => {
  return (
    <View style={styleBadge.container}>
      <Text style={styleBadge.quant}>
        {quant}
        {measure === 'p' && '/'}
      </Text>
      <Text style={styleBadge.text}>{measure}</Text>
    </View>
  );
};

export default Badge;
