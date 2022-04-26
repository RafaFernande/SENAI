import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/home'
import Page01 from './pages/Page01'

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "Page01" component={Page01}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}