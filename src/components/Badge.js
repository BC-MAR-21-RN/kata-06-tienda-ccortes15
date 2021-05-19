import React from 'react';
import {View} from 'react-native';
import {TextQuantity} from '.';
import {styleBadge} from '../library/styles';

const Badge = ({quant, measure}) => {
  return (
    <View style={styleBadge.container}>
      <TextQuantity quant={quant} measure={measure} style={styleBadge} />
    </View>
  );
};

export default Badge;
