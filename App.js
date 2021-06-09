import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContainer } from './src/navigators';
import {} from 'react-native-reanimated'

const App = () => {
  return (
    <NavigationContainer>
      <DrawerContainer />
    </NavigationContainer>
  );
};

export default App;
