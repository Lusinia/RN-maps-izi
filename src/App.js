import axios from 'axios';
import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import logger from 'redux-logger';
import { multiClientMiddleware } from 'redux-axios-middleware';
import reducer from './redux/reducers';
import clients from './redux/clients';

import { HomeScreen } from './screens';

console.disableYellowBox = true;


const Stack = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

const navReducer = createNavigationReducer(Stack);
const appReducer = combineReducers({
  nav: navReducer,
  main: reducer
});

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const App = reduxifyNavigator(Stack, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
  appReducer,
  applyMiddleware(middleware, multiClientMiddleware(clients), logger),
);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
