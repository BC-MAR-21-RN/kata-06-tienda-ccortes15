import React, {useState} from 'react';
import {View} from 'react-native';
import {
  AddRemoveItem,
  CollapseItem,
  InputContainer,
  Layout,
  PrimaryButton,
  ProductItem,
} from './src/components';
import {styleLayout, stylePrimaryButton} from './src/library/styles';

const App = () => {
  const [value, setValue] = useState('');
  const data = {
    order: 2341,
    productList: [
      {
        name: 'brocoli',
        quant: 2,
        measure: 'Kg',
        price: 3.14,
      },
      {
        name: 'apple',
        quant: 2,
        measure: 'p',
        price: 4.0,
      },
      {
        name: 'kale',
        quant: 300,
        measure: 'g',
        price: 2.5,
      },
    ],
  };

  return (
    <View style={styleLayout.container}>
      <CollapseItem data={data} />
      <Layout style={styleLayout.itemContainer}>
        <InputContainer
          icon={require('./src/assets/icons/arrow-right.png')}
          value={value}
          onChangeText={text => setValue(text)}
          placeholder={'Fullname'}
        />
      </Layout>
      <Layout style={styleLayout.itemContainer}>
        <InputContainer
          icon={require('./src/assets/icons/check.png')}
          value={value}
          onChangeText={text => setValue(text)}
          secureTextEntry
          placeholder={'Password'}
        />
      </Layout>
      <Layout style={styleLayout.itemContainer}>
        <ProductItem
          image={require('./img/cover.jpg')}
          product={data.productList[0]}
        />
      </Layout>
      <Layout style={styleLayout.itemContainer}>
        <AddRemoveItem />
      </Layout>
      <PrimaryButton
        text={'Add to cart'}
        styleButton={stylePrimaryButton.button}
        styleText={stylePrimaryButton.text}
      />
    </View>
  );
};

export default App;
