import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerContainer} from './src/navigators';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerContainer />
    </NavigationContainer>
  );
};

export default App;
