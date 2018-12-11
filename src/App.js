import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { HomeScreen } from './screens';


console.disableYellowBox = true;

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);

