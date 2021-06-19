import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {IconButton, PrimaryButton} from '.';
import {menu} from '../library/constants/icons';
import {drawerItems} from '../library/methods/drawer';
import {styleDrawerContent} from '../library/styles';

const DrawerContent = props => {
  const items = drawerItems(props.navigation);

  return (
    <View style={styleDrawerContent.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styleDrawerContent.viewTop}>
          <Text style={styleDrawerContent.title}>Vegetablely</Text>
          <Image
            source={require('../../img/store.png')}
            style={styleDrawerContent.image}
          />
        </View>
        <View style={styleDrawerContent.viewDown}>
          <IconButton
            onPress={() => props.navigation.toggleDrawer()}
            icon={menu}
            styleIcon={styleDrawerContent.icon}
          />
          {items.map((item, index) => (
            <PrimaryButton
              key={index}
              onPress={item.onPress}
              icon={item.icon}
              text={item.text}
              styleText={styleDrawerContent.text}
              styleButton={styleDrawerContent.button}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DrawerContent;
