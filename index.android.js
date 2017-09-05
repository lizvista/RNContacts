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
import { HomeScreen } from './app/components/HomeScreen.js';
import { ProfileScreen } from './app/components/ProfileScreen.js';
import { EditScreen } from './app/components/EditScreen.js';
import { MapScreen } from './app/components/MapScreen.js';
import { AddScreen } from './app/components/AddScreen.js';
import { styles } from './app/config/stylesheet.js';
import { TransitionConfiguration } from './app/config/Transition.js';



// initialize contacts data in AsyncStorage
AsyncStorage.setItem('Jane', JSON.stringify({title: 'Jane', first: 'Jane', last: 'Vista', number: '(210) 461-7186', address: 'University of South Carolina'}))
AsyncStorage.setItem('Drew', JSON.stringify({title: 'Drew', first: 'Andrew', last: 'Vista', number: '(210) 725-5384', address: 'Duke University'}))
AsyncStorage.setItem('Mom', JSON.stringify({title: 'Mom', first: 'Emily', last: 'Vista', number: '(210) 367-7056', address: '123 Maltland Dr Cary, NC 27518'}))
AsyncStorage.setItem('Dad', JSON.stringify({title: 'Dad', first: 'Jeff', last: 'Vista', number: '(919) 867-1134', address: 'Duke Hospital'}))

console.disableYellowBox = true;

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