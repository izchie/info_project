import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TextInput,
  TouchableOpacity
} from 'react-native';


constructor(props) {
  super(props);
  this.state = {
    username:'',
    password:''
  };
}

const styles = StyleSheet.create({
  container:{
      flex:5,
  },
  backgroundImage:{
    flex:1,
    alignSelf: 'stretch',
    width: null,
    justifyContent:'flex-end'
  },
  content_in:{
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    padding: 10,
  },
  content_logbtn:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.75)',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  content_txt:{
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.75)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  logo:{
    color: 'white',
    fontSize: 45,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowColor: '#252525',
    textShadowOffset: {width:4,height:4},
    marginBottom:20,
  },
  input:{
    fontSize: 25,
    height: 50,
    width: 250,
    padding: 10,
    marginBottom: 5,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  logbtn:{
    flex:1,
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,1)',
    borderBottomLeftRadius: 30,
  },
  regbtn:{
    flex:1,
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 20,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255,255,255,1)',
    borderBottomRightRadius: 30,
  },
  logtxt:{
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  space1:{
    flex:1,
  },
  space2:{
    flex:2,
  },
  space3:{
    flex:3,
  },
  space4:{
    flex:4,
  },

})
onchange


const Login =() => {
    return (
      <Image source={require('../img/bg.jpg')} style={styles.backgroundImage}>
      <View style={styles.space4}></View>
      <View style={styles.conainer}>
          <View style={styles.content_txt}>
            <Text style={styles.logo}>Anime Series</Text>
          </View>
          <View style={styles.content_in}>
            <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={styles.input}
              onChangeText={(username) => this.setState({username})}
              placeholder='username...'>
            </TextInput>
            <TextInput secureTextEntry={true}underlineColorAndroid='rgba(0,0,0,0)' style={styles.input}
              onChangeText={(password) => this.setState({password})}
              placeholder='password...' type='password'>
            </TextInput>
          </View>
          <View style={styles.content_logbtn}>
          <TouchableOpacity onPress={this.login} style={styles.logbtn}>
            <Text style={styles.logtxt}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.reg} style={styles.regbtn}>
            <Text style={styles.logtxt}>Sign Up</Text>
          </TouchableOpacity>
          </View>
      </View>
      <View style={styles.space1}></View>
      </Image>
    );
}



Login.navigationOptions ={
  drawer:{
    icon: ()=>(
      <Image
        source={require('../img/bt-oh.png')}
        style={[styles.tabIcon,{tintColor:'black'}]}/>
    )}
}

export default Login
