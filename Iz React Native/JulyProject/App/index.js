import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import md5 from "react-native-md5"

import screenLogin from './Page/Login'
import screenView from './Page/View'
import screenRemove from './Page/Remove'
import screenEdit from './Page/Edit'
import screenAdd from './Page/Add'

const App = TabNavigator({
  screenLogin: { screen: screenLogin },
  screenView: { screen: screenView },
  screenEdit: { screen: screenEdit },
  screenAdd: { screen: screenAdd },
  screenRemove: { screen: screenRemove }
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: 'white',
      rippleColor: 'white',
      tabs: {
        screenLogin: {
          barBackgroundColor: '#4444B2'
        },
        screenView: {
          barBackgroundColor: '#009A4A'
        },
        screenEdit: {
          barBackgroundColor: '#80A020'
        },
        screenAdd: {
          barBackgroundColor: '#A02080'
        },
        screenRemove: {
          barBackgroundColor: '#B22222'
        }
      }
    }
  }
})

export default App;
