import React, {Component} from 'react';
import {Image, Text, StyleSheet, ScrollView} from 'react-native';

export default class componentData extends Component {
  render(){

    let show = this.props.data.map(function(room, index){
      return(
                <Text>{room.firstname.$t}</Text>
      )
    })

    return(
        {show}
    );
  }
}

module.export = componentData;
