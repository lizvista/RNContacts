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
import { styles } from './stylesheet.js';

const HomeScreenContactButton = (props) => {
  const {title, navigate} = props;
  return (
    <Button
      title={title}
      onPress={() =>
        AsyncStorage.getItem(title, (err, item) => navigate('Profile', JSON.parse(item)))
        //navigate('Profile', JSON.parse(AsyncStorage.getItem('Jane')))
      }
    />
  );
};

// HomeScreen: lists contacts by 'title'
export class HomeScreen extends Component {
  static navigationOptions = {
    title: 'My Contacts',
  };

  render() {
    const { navigate } = this.props.navigation;
    console.log('test');
    return (
      <View>
        <HomeScreenContactButton title="Jane" navigate={navigate} />
        <HomeScreenContactButton title="Drew" navigate={navigate} />
        <HomeScreenContactButton title="Mom"  navigate={navigate} />
        <HomeScreenContactButton title="Dad"  navigate={navigate} />
      </View>
    );
  }
}