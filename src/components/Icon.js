import React from 'react';
import {Image} from 'react-native';

const Icon = ({icon, style}) => {
  return <Image source={icon} style={style} />;
};

export default Icon;
