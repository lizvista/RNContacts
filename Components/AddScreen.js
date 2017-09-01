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

// AddScreen: not yet implemented, will allow user to create a new contact
export class AddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      first: '',
      last: '',
      number: '',
      address: '',
    }
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Add Contact',
  });

  render() {
    const { goBack } = this.props.navigation;
    return(
      <View style={[styles.container]}>
      <Text> Nickname: </Text>
      <TextInput
        onChangeText={(title) => this.setState({title})}
        value={this.state.title}
      />
      <Text> First Name: </Text>
      <TextInput
        onChangeText={(first) => this.setState({first})}
        value={this.state.first}
      />
      <Text> Last Name: </Text>
      <TextInput
        onChangeText={(last) => this.setState({last})}
        value={this.state.last}
      />
      <Text> Number: </Text>
      <TextInput
        onChangeText={(number) => this.setState({number})}
        value={this.state.number}
      />
      <Text> Address: </Text>
      <TextInput
        onChangeText={(address) => this.setState({address})}
        value={this.state.address}
      />
      <Button
      title="Save" 
      onPress={() => {
        const { refresh } = this.props.navigation.state.params;
        AsyncStorage.setItem(this.state.title, JSON.stringify({
          'title': this.state.title, 
          'first': this.state.first, 
          'last': this.state.last, 
          'number': this.state.number, 
          'address': this.state.address
        }))
        AsyncStorage.getItem(this.state.title, (err, item) => { 
          if (!err) {
            Alert.alert('Saved', 'Contact Created');
            refresh();
          } 
          else {
            Alert.alert('Error', 'Changes Not Saved');
          }
          goBack();
         // (!err) ? (Alert.alert('Saved', 'Contact Created')) : ((Alert.alert('Error', 'Changes Not Saved'))) , goBack() 
        } ) 
      } }
      />
      </View>
    );
  }
}
