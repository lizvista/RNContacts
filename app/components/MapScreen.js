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
//import Geocoder from 'react-native-geocoding';
import { getLocation } from './app/components/LocationServices.js';
import { styles } from './app/components/stylesheet.js';


// MapScreen: shows contact's location (currently shows San Francisco
export class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {lat: 0, lng: 0}
    };
  }

  static navigationOptions = ({navigation}) => ({
    title: "Location",
  });

  getLatLng = (address) => {
    getLocation(address)
    .then(location => this.setState({location}))
    .catch(err => console.log(err));
  }

  componentWillMount = () => this.getLatLng(this.props.navigation.state.params.address);

  render() {
    const { params } = this.props.navigation.state;
    const { location } = this.state;
    return(
      <View style={[styles.containerMap]}>
      <MapView style={[styles.map]}
        region={{
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}
      >
      <MapView.Marker 
        coordinate={{latitude: location.lat, longitude: location.lng}}
      />
      </MapView>
      </View>
    )
  }
}

