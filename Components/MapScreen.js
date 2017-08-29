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
import MapView from 'react-native-maps';
import { styles } from './stylesheet.js';

// MapScreen: shows contact's location (currently shows San Francisco)
export class MapScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => ({
    title: "Location",
  });

  render() {
    return(
      <View style={[styles.containerMap]}>
      <MapView style={[styles.map]}
        region={{
        latitude: this.props.navigation.state.params.latitude,
        longitude: this.props.navigation.state.params.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}
      >
      <MapView.Marker 
        coordinate={{latitude: this.props.navigation.state.params.latitude, longitude: this.props.navigation.state.params.longitude}}
      />
      </MapView>
      </View>
    )
  }
}

