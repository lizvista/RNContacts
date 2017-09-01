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
    this.state = {
      first: '',
      last: '',
      number: '',
      address: '',
    }
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Edit Contact',
  });

  initProfile = (profile) => this.setState(profile);

  componentWillMount = () => this.initProfile(this.props.navigation.state.params.profile);

  render() {
    const { goBack } = this.props.navigation;
    const { profile } = this.props.navigation.state.params;
    console.log(profile);
    return(
      <View style={[styles.container]}>
      <Text> Nickname: {profile.title} {"\n"}</Text>
      <Text> First Name: </Text>
      <TextInput
        onChangeText={(first) => this.setState({first})}
        value={this.state.first}
        defaultValue={profile.first}
      />
      <Text> Last Name: </Text>
      <TextInput
        onChangeText={(last) => this.setState({last})}
        value={this.state.last}
        defaultValue={profile.last}
      />
      <Text> Number: </Text>
      <TextInput
        onChangeText={(number) => this.setState({number})}
        value={this.state.number}
        defaultValue={profile.number}
      />
      <Text> Address: </Text>
      <TextInput
        onChangeText={(address) => this.setState({address})}
        value={this.state.address}
        defaultValue={profile.address}
      />
      <Button
      title="Save" 
      onPress={() => {
        const { refresh } = this.props.navigation.state.params;
        console.log(this.state);
        AsyncStorage.setItem(profile.title, JSON.stringify({'first': this.state.first, 'last': this.state.last, 'number': this.state.number, 'address': this.state.address}));
        AsyncStorage.getItem(profile.title, (err, item) => { 
          if (!err) {
            Alert.alert('Saved', 'Changes Saved');
            refresh();
          } 
          else {
            Alert.alert('Error', 'Changes Not Saved');
          }
          goBack(); 
        } );
      } }
      />
      </View>
    );
  }
}
