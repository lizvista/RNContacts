import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Button,
  TextInput,
  AsyncStorage,
  Easing,
  Animated,
  TouchableHighlight,
} from 'react-native';
import { styles } from './stylesheet.js';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    }
  }

  static navigationOptions = {
    title: 'My Contacts',
  };

  getContacts = () => {
    AsyncStorage.getAllKeys((err, contacts) => {
      this.setState({contacts});
    })
  }

  componentWillMount = () => {
    this.getContacts();
    console.log('here');
  }

  // function passed as parameter to AddScreen
  // triggers refresh of HomeScreen after a new contact is added to update list
  refreshContactsOnGoBack = () => {
    this.props.navigation.navigate(
      'Add', 
    {
      refresh: () => this.componentWillMount(),
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return (
      <View>
      <ListView
      dataSource={ds.cloneWithRows(this.state.contacts)}
      renderRow={(data) => <Button title={data} navigate={navigate} onPress={() => navigate('Profile', { name: data })} />}
      />
      <Text>{"\n"}</Text>
      <Button 
      title='Add Contact'
      onPress={() => this.refreshContactsOnGoBack()}
      />
      </View>
    );
  }
}
