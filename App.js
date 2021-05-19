import React from 'react';
import { Icon, Layout, PrimaryButton } from './src/components';
import { styleAddToCart, styleIcon, styleLayout, stylePrimaryButton } from './src/library/styles';


const App = () => {
  const onPress = () => alert('pressed!')

  const iconItem = <Icon icon={require('./src/assets/icons/arrow-right.png')} style={styleIcon.iconSmall} />
  
  return (
    <Layout style={styleLayout.container}>
      <Layout style={styleLayout.itemContainer}>
        <PrimaryButton text="Add to cart" onPress={onPress} style={styleAddToCart} borderButton />
      </Layout>
      <PrimaryButton text="Add to cart" onPress={onPress} style={stylePrimaryButton} />
      <PrimaryButton text="Let's shop" icon={iconItem} onPress={onPress} style={stylePrimaryButton} />
    </Layout>
  );
};

export default App;
