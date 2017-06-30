import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem,Card,CardItem,ListItemMe} from 'react-native-elements';
import { users } from '../config/data';
import { me } from '../config/data';
import Me from '../screens/Me';

class Feed extends Component {
  onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };
  onMyProfile = (me) => {
    this.props.navigation.navigate('Me', { ...me });
  };

  render() {
    return (
      <View style={{flex:1,}}>

        <View style={{backgroundColor:'#FFFFFF',borderBottomWidth:1,borderColor:'#DADADA',marginTop:1,}}>
        <ListItem
            key={me.login.username}
            roundAvatar
            avatar={{ uri: me.picture.thumbnail }}
            title={`${me.name.first.toUpperCase()} ${me.name.last.toUpperCase()}`}
            subtitle={me.email}
            onPress={() => this.onMyProfile(me)}/>
        </View>

          <View style={{flex:1,borderBottomWidth:1,borderColor:'rgba(0,0,0,0.2)'}}>
          <View style={{flex:1,borderTopWidth:1,borderColor:'rgba(20,20,20,0.2)',marginTop:15,}}>
          <Text style={{backgroundColor:'#FFFFFF',fontSize:18,fontWeight:'bold',color:'#000000',padding:15}}>{'Friends List'}</Text>
          </View></View>

          <View style={{flex:6,}}>
          <ScrollView style={{flex:1,backgroundColor:'#FFFFFF'}}>
          {users.map((user) => (
            <ListItem style={{flex:1}}
              key={user.login.username}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail }}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              onPress={() => this.onLearnMore(user)}
            />
          ))}
          </ScrollView>
          </View>

      </View>
    );
  }
}

export default Feed;
