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

/*const HomeScreenContactButton = (props) => {
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
};*/

// HomeScreen: lists contacts by 'title'
/*export class HomeScreen extends Component {
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
}*/

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
