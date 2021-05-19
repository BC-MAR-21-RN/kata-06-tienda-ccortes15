import React from 'react';
import {View} from 'react-native';

const Layout = ({children, style}) => {
  return <View style={style}>{children}</View>;
};

export default Layout;
