import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Loger from '../screens/Login';
import Feed from '../screens/Feed';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';
import Swiper from 'react-native-swiper'

import MyNote from '../../Mix/MyNote'
import MySwiper from '../../Mix/MySwiper'
import MyGame from '../../Mix/MyGame'

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'My Profile',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
  Me: {
    screen: Me,
    tabBarLabel: 'Me',
    navigationOptions: {
      title: 'My Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />,
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export const Tabs = TabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Note: {
    screen: MyNote,
    navigationOptions: {
      tabBarLabel: 'Note',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
  Swiper: {
    screen: MySwiper,
    navigationOptions: {
      tabBarLabel: 'Swiper',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
  Game: {
    screen: MyGame,
    navigationOptions: {
      tabBarLabel: 'Game',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },

}, {
  tabBarOptions : {
    activeTintColor: '#FF0000',
    pressColor : '#550000',
    borderColor: '#55FF55',
    indicatorStyle:{
      backgroundColor: '#FF0000',
    },
    iconStyle:{
      backgroundColor : '#FFFFFF',
    },
    tabStyle:{
      backgroundColor : 'rgba(0,0,0,.5)',
    },
    style: {
      backgroundColor: '#8844DD',
    }
  }
},
);


export const Root = StackNavigator({
  Loger: {
    screen: Loger,
  },
    Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: Settings,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
