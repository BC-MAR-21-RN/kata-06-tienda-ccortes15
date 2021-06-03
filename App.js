import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Details, MyOrder, YourOrder, OrderComplete, CreateAccount, SignIn } from './src/containers';

const Stack = createStackNavigator();

const App = () => {
  const screens = [
    {
      name: 'HomeScreen',
      component: Home
    },
    {
      name: 'Detail',
      component: Details
    },
    {
      name: 'MyOrders',
      component: MyOrder
    },
    {
      name: 'YourOrders',
      component: YourOrder
    },
    {
      name: 'OrderScreen',
      component: OrderComplete
    },
    {
      name: 'CreateAccountScreen',
      component: CreateAccount
    },
    {
      name: 'Sign-In',
      component: SignIn
    }
  ]

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {screens.map((screen) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
