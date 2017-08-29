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
    const args = { number: this.props.navigation.state.params.number };
    //const { first }    = this.props.navigation.state.params.first;
    //const { last }     = this.props.navigation.state.params.last;
    //const { number }   = this.props.navigation.state.params.number;
    return (
      <View style={[styles.container]}>
        <Text style={[styles.contactName]}> { this.props.navigation.state.params.first } { this.props.navigation.state.params.last } </Text>
        <Text style={[styles.contactDetails]}> { this.props.navigation.state.params.number } { "\n" } </Text>
        <Button 
          style={[styles.button]}
          title="Edit Contact" 
          onPress={() =>
            navigate('Edit', this.props.navigation.state.params)
          }
        />
        <Button 
          style={[styles.button]}
          title="View Location" 
          onPress={() =>
            navigate('Map', this.props.navigation.state.params)
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