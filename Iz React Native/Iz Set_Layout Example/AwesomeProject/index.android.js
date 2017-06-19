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
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.comp1}>
        <Image style={styles.logo} source={require('./src/codercat.jpg')}/>
        </View>


        <View style={styles.comp2}>
        <Text style={styles.txt_title}>       Welcome        </Text>
        </View>

        <View style={styles.comp3}>
        <TouchableOpacity style={styles.bt_menu}>
        <Text style={styles.txt_instructions}>Login</Text></TouchableOpacity>
        </View>

        <View style={styles.comp4}>
        <TouchableOpacity style={styles.bt_menu}>
        <Text style={styles.txt_instructions}>Register</Text></TouchableOpacity>
        </View>

      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //flexWrap: 'wrap','nowrap'
    //flexDirection: "column","row","column-reverse","row-reverse",
    //justifyContent: 'center','space-around','space-between','flex-start','flex-end',
    //alignItems: 'center','flex-start','flex-end','stretch,
    flex:1,
    flexWrap: 'wrap',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A0B0FF',
  },

  comp1: {flex:4,justifyContent: 'flex-end',margin:10},
  comp2: {borderTopLeftRadius: 14,borderTopRightRadius: 14,borderBottomRightRadius: 50,borderBottomLeftRadius: 50,backgroundColor: '#0044AA',flex:1,justifyContent: 'flex-start',margin:-10,},
  comp3: {flex:1,justifyContent: 'center',},
  comp4: {flex:1,justifyContent: 'flex-start',},

  logo:{
    width: 340,
    height: 340,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    overflow: 'hidden',
  },
  logotitle:{
    width: 34,
    height: 34,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'hidden',
  },


  txt_title: {
    fontSize: 50,
    color: '#EEEEFF',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
  txt_instructions: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#5080AF',
  },



  bt_background: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bt_menu: {
    backgroundColor: '#EEEEFF',
    width: 180,
    height: 50,
    margin: -15,
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
