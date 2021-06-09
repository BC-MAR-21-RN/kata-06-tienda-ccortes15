import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {IconButton} from '.';
import {cart, menu} from '../library/constants/icons';
import {styleHeader, styleHeaderIcon} from '../library/styles';

const Header = ({title, navigation}) => {
  const isDetails = title === 'Details' ? true : false;

  const iconComponent = (icon, func) => (
    <IconButton
      icon={icon}
      styleIcon={
        title === 'Details'
          ? styleHeaderIcon.grayIcon
          : styleHeaderIcon.whiteIcon
      }
      onPress={func}
    />
  );

  return (
    <View
      style={[
        styleHeader.container,
        isDetails ? styleHeader.whiteHeader : styleHeader.transHeader,
      ]}>
      <StatusBar
        barStyle={isDetails ? 'dark-content' : 'light-content'}
        backgroundColor={'transparent'} 
        translucent
      />
      {iconComponent(menu, () => navigation.toggleDrawer() )}
      <Text style={isDetails ? styleHeader.titleGray : styleHeader.titleWhite}>
        {title}
      </Text>
      {iconComponent(cart, () => navigation.jumpTo('MyOrders'))}
    </View>
  );
};

export default Header;
