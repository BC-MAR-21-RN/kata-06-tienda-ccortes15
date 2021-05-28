import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Details } from './src/containers';
import { homeOptions, detailsOptions } from './src/library/constants/screenOptions';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={homeOptions}
        />
        <Stack.Screen
          name="Detail"
          component={Details}
          options={detailsOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
