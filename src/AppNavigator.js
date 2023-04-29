import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './screen/Splash';
import Login from './screen/Login';
import Register from './screen/Register';
import Home from './screen/Home';
import AddAddress from './screen/AddAddress';
import MyAddress from './screen/MyAddress';

const stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen options={{ headerShown: false }} name="Spash" component={Splash} />
        <stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
        <stack.Screen options={{ headerShown: false }} name='Register' component={Register} />
        <stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
        <stack.Screen options={{ headerShown: false }} name="MyAddress" component={MyAddress} />
        <stack.Screen options={{ headerShown: false }} name='AddAddress' component={AddAddress} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
