import React from 'react';
import {ImageBackground} from 'react-native';
import CardView from 'react-native-cardview';
import {styleImageContainer} from '../library/styles';

const ImageContainer = ({image}) => {
  return (
    <CardView
      cardElevation={10}
      cardMaxElevation={10}
      cornerRadius={5}
      style={styleImageContainer.card}>
      <ImageBackground source={image} style={styleImageContainer.image} />
    </CardView>
  );
};

export default ImageContainer;
