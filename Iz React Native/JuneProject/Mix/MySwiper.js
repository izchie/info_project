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
 import Swiper from './MySwiper/swipe'

export default class MySwiper extends Component {
  render() {
    return (
      <View style={styles.container}>

      <View style={styles.box}>
      <Swiper/>
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4267b2',
  },
  bar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 50,
    color: '#FFFFFF',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
