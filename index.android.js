/*
Elizabeth Vista
Aug 2017
React Native Contacts POC
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  AsyncStorage,
  Easing,
  Animated,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MapView from 'react-native-maps';
import { HomeScreen } from './Components/HomeScreen.js';
import { ProfileScreen } from './Components/ProfileScreen.js';
import { EditScreen } from './Components/EditScreen.js';
import { MapScreen } from './Components/MapScreen.js';
import { styles } from './Components/stylesheet.js';
import { TransitionConfiguration } from './Components/Transition.js'

// initialize contacts data in AsyncStorage
AsyncStorage.setItem('Jane', JSON.stringify({'title': 'Jane', 'first': 'Jane', 'last': 'Vista', 'number': '(210) 461-7186', latitude: 33.9961, longitude: -81.0274}))
AsyncStorage.setItem('Drew', JSON.stringify({'title': 'Drew', 'first': 'Andrew', 'last': 'Vista', 'number': '(210) 725-5384', latitude: 36.003478, longitude: -78.935810}))
AsyncStorage.setItem('Mom', JSON.stringify({'title': 'Mom', 'first': 'Emily', 'last': 'Vista', 'number': '(210) 367-7056', latitude: 35.7915, longitude: -78.7811}))
AsyncStorage.setItem('Dad', JSON.stringify({'title': 'Dad', 'first': 'Jeff', 'last': 'Vista', 'number': '(919) 867-1134', latitude: 36.007840, longitude: -78.938019}))

const help = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    Edit: { screen: EditScreen },
    Map: { screen: MapScreen },
  },
  {
    transitionConfig: TransitionConfiguration
  }
);

AppRegistry.registerComponent('help', () => help);