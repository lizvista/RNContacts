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

// MyTransition: custom transition
let MyTransition = (index, position) => {
  const inputRange = [index -1, index, index + 0.99, index + 1];
  //const outputRange = [0, 1, 1, 0];
  const opacity = position.interpolate({
    inputRange,
    outputRange: ([0, 1, 1, 0]),
  });

  const translateX = 0;
  const translateY = position.interpolate({
    inputRange,
    outputRange: ([50, 0, 0, 0]),
  })

  /*const scaleY = position.interpolate({
    inputRange,
    outputRange,
  });*/

  return {
    opacity,
    transform:[ {translateX}, {translateY} ],
  };
};

const MyTransitionSpec = ({
  duration: 2000,
  easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
  timing: Animated.timing,
});

let TransitionConfiguration = () => {
  return {
    transitionSpec: MyTransitionSpec,
    screenInterpolator: (sceneProps) => {
      const {position, scene} = sceneProps;
      const {index} = scene;
      return MyTransition(index, position);
    }
  }
};