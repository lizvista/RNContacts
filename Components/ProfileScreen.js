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
  TouchableHighlight,
  Image,
} from 'react-native';
import { styles } from './stylesheet.js';
import call from 'react-native-phone-call';

// ProfileScreen: shows first name, last name, and phone number of contact
// navigation available to EditScreen & MapScreen
export class ProfileScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title,
  });

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View style={[styles.container]}>
        <Text style={[styles.contactName]}> { params.first } { params.last } </Text>
        <Text style={[styles.contactDetails]}> { params.number } { "\n" } </Text>
        <Button 
          style={[styles.button]}
          title="Edit Contact" 
          onPress={() =>
            navigate('Edit', params)
          }
        />
        <Button 
          style={[styles.button]}
          title="View Location" 
          onPress={() =>
            navigate('Map', params)
          }
        />
        <TouchableHighlight onPress={() => call(args).catch(console.error)}>
          <Image 
            style={[styles.img]}
            source={require('./img/callButton.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}