import React from 'react';
import { useState } from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import {Background, PrimaryButton} from '../components';
import {stylePrimaryButton, styleStart} from '../library/styles';

const LetsStart = ({navigation}) => {
  return (
    <Background>
      <StatusBar backgroundColor={'transparent'} translucent />
      <View style={styleStart.container}>
        <View style={styleStart.view}>
          <Text style={styleStart.text}>Vegezone</Text>
          <View style={styleStart.imageContainer}>
            <Image
              source={require('../../img/store.png')}
              style={styleStart.image}
            />
          </View>
        </View>
        <PrimaryButton
          onPress={() => navigation.jumpTo('SignIn')}
          text="Let's Shop"
          styleButton={stylePrimaryButton.button}
          styleText={stylePrimaryButton.text}
        />
      </View>
    </Background>
  );
};

export default LetsStart;
