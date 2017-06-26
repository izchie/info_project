import React, {Component} from 'react';
import {Text, Image, StyleSheet,} from 'react-native';
import {Footer, FooterTab, Button, Icon,} from 'native-base';

export default class AppFooter extends Component {

  render(){
    return (
              <Footer style={{height:140}}>
                <FooterTab style={{backgroundColor:'#AA66FF', height:140}}>
                  <Button style={{height:200}}>
                    <Image source={require('../img/bt-idk.png')} style={izfoot.btnlogo}/>
                    <Text style={izfoot.text}>｢ HOME ｣</Text>
                  </Button>
                  <Button style={{height:200,backgroundColor:'#995FDD'}}>
                    <Image source={require('../img/bt-oh.png')} style={izfoot.btnlogo}/>
                    <Text style={izfoot.text}>｢ LIST ｣</Text>
                  </Button>
                  <Button style={{height:200}}>
                    <Image source={require('../img/bt-hon.png')} style={izfoot.btnlogo }/>
                    <Text style={izfoot.text}>｢ PAGE ｣</Text>
                  </Button>
                </FooterTab>
              </Footer>
    );
  }
}
const izfoot = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  btnlogo:{
    width: 100,
    height: 100,
  },

});
module.export = AppFooter;
