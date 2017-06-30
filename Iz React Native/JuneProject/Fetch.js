/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Container,StyleProvider} from 'native-base';
import izanime from './theme/variables/izanime';
import getTheme from './theme/components';
import AppHeader from './Mix/Fetch/part/appHeader';
import AppFooter from './Mix/Fetch/part/appFooter';
import AppBody from './Mix/Fetch/part/appBody';

export default class Fetch extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(izanime)}>
      <Container>
        <AppHeader/>
        <AppBody/>
        <AppFooter/>
      </Container>
      </StyleProvider>
    );
  }
}
