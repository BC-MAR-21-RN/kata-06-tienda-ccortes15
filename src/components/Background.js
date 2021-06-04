import React from 'react';
import {ImageBackground, View} from 'react-native';
import {styleBackground} from '../library/styles';

const Background = ({children}) => {
  return (
    <View style={styleBackground.container}>
      <ImageBackground
        source={require('../../img/cover.jpg')}
        style={styleBackground.image}>
        <View style={styleBackground.children}>{children}</View>
      </ImageBackground>
    </View>
  );
};

export default Background;
