import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { DrawerNavigator} from 'react-navigation'

import Login from './components/Login'
import Main from './components/Main'


export default class SQLcon extends Component {

  render() {
    return (
      <show />
    );
  }

}

const IzSQL = DrawerNavigator({
  Login: { screen: Login },
  Main: { screen: Main}
});

AppRegistry.registerComponent('SQLcon', () => IzSQL);
