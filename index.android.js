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
import { AddScreen } from './Components/AddScreen.js';
import { styles } from './Components/stylesheet.js';
import { TransitionConfiguration } from './Components/Transition.js'


//AsyncStorage.removeItem('Dad', (err, item) => void);

// initialize contacts data in AsyncStorage
AsyncStorage.setItem('Jane', JSON.stringify({title: 'Jane', first: 'Jane', last: 'Vista', number: '(210) 461-7186', address: 'University of South Carolina'}))
AsyncStorage.setItem('Drew', JSON.stringify({title: 'Drew', first: 'Andrew', last: 'Vista', number: '(210) 725-5384', address: 'Duke University'}))
AsyncStorage.setItem('Mom', JSON.stringify({title: 'Mom', first: 'Emily', last: 'Vista', number: '(210) 367-7056', address: '123 Maltland Dr Cary, NC 27518'}))
AsyncStorage.setItem('Dad', JSON.stringify({title: 'Dad', first: 'Jeff', last: 'Vista', number: '(919) 867-1134', address: 'Duke Hospital'}))

const help = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    Edit: { screen: EditScreen },
    Map: { screen: MapScreen },
    Add: { screen: AddScreen },
  },
  {
    transitionConfig: TransitionConfiguration
  }
);


AppRegistry.registerComponent('help', () => help);