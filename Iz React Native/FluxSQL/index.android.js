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
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import PageOne from './Pagebase/PageOne';
import PageTwo from './Pagebase/PageTwo';


export default class FluxSQL extends Component {
  render() {
    return (
      <Router>
          <Scene key="root">
            <Scene key="pageOne" component={PageOne} title="Hello" initial={true} />
            <Scene key="pageTwo" component={PageTwo} title="Welcome" />
          </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('FluxSQL', () => FluxSQL);
