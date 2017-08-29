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
  Alert,
} from 'react-native';
import { styles } from './stylesheet.js';

// EditScreen: allows user to modify first name, last name, and phone number of contact
export class EditScreen extends Component {

  constructor(props) {
    super(props);
    this.state = this.props.navigation.state;
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Edit Contact',
  });

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={[styles.container]}>
      <Text> Nickname: {this.props.navigation.state.params.title} {"\n"}</Text>
      <Text> First Name: </Text>
      <TextInput
        onChangeText={(first) => this.setState({first})}
        value={this.state.first}
        defaultValue={this.props.navigation.state.params.first}
      />
      <Text> Last Name: </Text>
      <TextInput
        onChangeText={(last) => this.setState({last})}
        value={this.state.last}
        defaultValue={this.props.navigation.state.params.last}
      />
      <Text> Number: </Text>
      <TextInput
        onChangeText={(number) => this.setState({number})}
        value={this.state.number}
        defaultValue={this.props.navigation.state.params.number}
      />
      <Button
      title="Save" 
      onPress={() => {
        AsyncStorage.setItem(this.props.navigation.state.params.title, JSON.stringify({'first': this.state.first, 'last': this.state.last, 'number': this.state.number}))
        AsyncStorage.getItem(this.props.navigation.state.params.title, (err, item) => { (!err) ? (Alert.alert('Saved', 'Changes Saved')) : ((Alert.alert('Error', 'Changes Not Saved'))) , navigate('Profile', JSON.parse(item)) } ) 
      } }
      />
      </View>
    );
  }
}

