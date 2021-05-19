import React from 'react';
import { AddRemoveItem, Badge, Icon, Layout, PrimaryButton, TextQuantity } from './src/components';
import { styleAddToCart, styleIcon, styleLayout, stylePrimaryButton } from './src/library/styles';


const App = () => {
  const onPress = () => alert('pressed!')
  
  return (
    <Layout style={styleLayout.container}>
      <Layout style={styleLayout.itemContainer}>
        <PrimaryButton text="Add to cart" onPress={onPress} style={styleAddToCart} borderButton />
      </Layout>
      <PrimaryButton text="Add to cart" onPress={onPress} style={stylePrimaryButton} />
      <PrimaryButton text="Let's shop" onPress={onPress} style={stylePrimaryButton} icon />
      <Badge quant={4} measure={'p'} />
      <TextQuantity quant={2} measure={'kg'} style={{quant: {color: 'gray'}, text: {color: 'gray', marginTop: 10}}} /> 
      <AddRemoveItem />
    </Layout>
  );
};

export default App;
