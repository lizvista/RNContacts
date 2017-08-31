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
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        title: '',
        first: '',
        last: '',
        number: '',
        address: '',
      }
    };
  }

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title,
  });

  getProfile = (title) => {
    AsyncStorage.getItem(title, (err, item) => {
      let profile = JSON.parse(item);
      this.setState({profile});
    });
  }

  componentWillMount = () => this.getProfile(this.props.navigation.state.params.name);

  refreshProfileOnGoBack = (profile) => {
    this.props.navigation.navigate(
      'Edit', 
    {
      profile,
      refresh: () => this.componentWillMount(),
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { profile } = this.state;
    return (
      <View style={[styles.container]}>
        <Text style={[styles.contactName]}> { profile.first } { profile.last } </Text>
        <Text style={[styles.contactDetails]}> { profile.number } { "\n" } </Text>
        <Button 
          style={[styles.button]}
          title="Edit Contact" 
          onPress={() => this.refreshProfileOnGoBack(profile)}
        />
        <Button 
          style={[styles.button]}
          title="View Location" 
          onPress={() =>
            navigate('Map', profile)
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
