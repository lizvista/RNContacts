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
import { StackNavigator } from 'react-navigation';
import { styles } from './stylesheet.js';

// EditScreen: allows user to modify first name, last name, and phone number of contact
export class EditScreen extends Component {

  constructor(props) {
    super(props);
    this.state = this.props.navigation.state.params;
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Edit Contact',
  });

  render() {
    const { goBack } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return(
      <View style={[styles.container]}>
      <Text> Nickname: {params.title} {"\n"}</Text>
      <Text> First Name: </Text>
      <TextInput
        onChangeText={(first) => this.setState({first})}
        value={this.state.first}
        defaultValue={params.first}
      />
      <Text> Last Name: </Text>
      <TextInput
        onChangeText={(last) => this.setState({last})}
        value={this.state.last}
        defaultValue={params.last}
      />
      <Text> Number: </Text>
      <TextInput
        onChangeText={(number) => this.setState({number})}
        value={this.state.number}
        defaultValue={params.number}
      />
      <Button
      title="Save" 
      onPress={() => {
        AsyncStorage.setItem(params.title, JSON.stringify({'first': this.state.first, 'last': this.state.last, 'number': this.state.number}))
        AsyncStorage.getItem(params.title, (err, item) => { (!err) ? (Alert.alert('Saved', 'Changes Saved')) : ((Alert.alert('Error', 'Changes Not Saved'))) , goBack() } ) 
      } }
      />
      </View>
    );
  }
}

