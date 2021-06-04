import React from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import {Background, PrimaryButton} from '../components';
import {stylePrimaryButton, styleStart} from '../library/styles';

const LetsStart = ({navigation}) => {
  const goHome = () => navigation.navigate('HomeScreen');

  return (
    <Background>
      <StatusBar hidden={true} />
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
          onPress={() => goHome()}
          text="Let's Start"
          styleButton={stylePrimaryButton.button}
          styleText={stylePrimaryButton.text}
        />
      </View>
    </Background>
  );
};

export default LetsStart;
