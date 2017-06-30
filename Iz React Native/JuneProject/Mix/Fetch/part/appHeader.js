import React, {Component} from 'react';
import {Text,Image,} from 'react-native';
import {Header, Left, Button, Icon, Title, Body, Right} from 'native-base';
export default class AppHeader extends Component {

  render(){
    return (
              <Header style={{backgroundColor:'#995FDD',}}>
                <Body style={{flexDirection:'row',alignItems:'center',}}>
                <Title style={{flex:1}}></Title>
                <Image source={require('../img/h-logo.png')} style={{resizeMode:'stretch',width:150,height:54,flex:6,}}/>
                <Title style={{flex:1}}></Title>
                </Body>
              </Header>
    );
  }
}

module.export = AppHeader;
