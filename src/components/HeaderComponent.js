import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {IconButton} from '.';
import {colors} from '../library/constants/colors';
import {cart, menu} from '../library/constants/icons';
import {styleHeader, styleHeaderIcon} from '../library/styles';

const Header = ({title}) => {
  const isDetails = title === 'Details' ? true : false;

  const iconComponent = (icon, func) => (
    <IconButton
      icon={icon}
      styleIcon={
        title === 'Details'
          ? styleHeaderIcon.grayIcon
          : styleHeaderIcon.whiteIcon
      }
      underlay={title === 'Details' ? colors.white : colors.green}
      onPress={func}
    />
  );

  const onPress = () => console.log('pressed!');

  return (
    <View
      style={[
        styleHeader.container,
        isDetails ? styleHeader.whiteHeader : styleHeader.transHeader,
      ]}>
      <StatusBar
        barStyle={isDetails ? 'dark-content' : 'light-content'}
        backgroundColor={isDetails ? colors.white : colors.green}
      />
      {iconComponent(menu, onPress)}
      <Text style={isDetails ? styleHeader.titleGray : styleHeader.titleWhite}>
        {title}
      </Text>
      {iconComponent(cart, onPress)}
    </View>
  );
};

export default Header;
