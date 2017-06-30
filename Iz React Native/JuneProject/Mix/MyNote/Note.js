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
  TouchableOpacity,
} from 'react-native';

export default class Iz_ComponentStore extends Component {
  render() {
    return (

      <View key={this.props.keyval} style={styles.note}>

        <Text style={styles.noteDate}>{this.props.val.title} | at {this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
          <Text style={styles.noteDeleteText}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note:{
      flex: 4,
      position: 'relative',
      padding: 20,
      paddingRight: 100,
      borderBottomWidth: 2,
      borderBottomColor: '#ededed',
      borderRadius: 14,
      backgroundColor: '#FFFFFF',
      marginTop: 6,
  },
  noteDate:{
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color:'#3E3E3E',
  },
  noteText:{
    paddingLeft: 20,
    fontSize: 17,
    color:'#5E5E5E',
  },
  noteDelete:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DD6060',
    borderRadius: 50,
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  noteDeleteText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,

  }
});
