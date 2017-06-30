import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator
} from 'react-native';

const Main =() => {
    return (
      <Text>
      Mainpage
      </Text>
    );
}

Main.navigationOptions ={
  drawer:{
    icon: ()=>(
      <Image
        source={require('../img/bt-oh.png')}
        style={[styles.tabIcon,{tintColor:'black'}]}
      />
    )
  }
}

export default Main
