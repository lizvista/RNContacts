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
import { StackNavigator } from 'react-navigation';
import MapView from 'react-native-maps';

/*var contacts = {}
contacts["Jane"] = { title: 'Jane', first: 'Jane', last: 'Vista', number: '(210) 461-7186' }
contacts["Drew"] = { title: 'Drew', first: 'Andrew', last: 'Vista', number: '(210) 725-5384' }
contacts["Mom"] = { title: 'Mom', first: 'Emily', last: 'Vista', number: '(210) 367-7056' }
contacts["Dad"] = { title: 'Dad', first: 'Jeff', last: 'Vista', number: '(919) 867-1134' }
contacts["Sarah"] = { title: 'Sarah', first: 'Sarah', last: 'Devitt', number: '(708) 254-3711' }
contacts["MK"] = { title: 'MK', first: 'Mary Kate', last: 'Nawalaniec', number: '(817) 874-2395' }
contacts["Laura"] = { title: 'Laura', first: 'Laura', last: 'Bobich', number: '(925) 588-9897' }
*/

// initialize contacts data in AsyncStorage
AsyncStorage.setItem('Jane', JSON.stringify({'title': 'Jane', 'first': 'Jane', 'last': 'Vista', 'number': '(210) 461-7186'}))
AsyncStorage.setItem('Drew', JSON.stringify({'title': 'Drew', 'first': 'Andrew', 'last': 'Vista', 'number': '(210) 725-5384'}))
AsyncStorage.setItem('Mom', JSON.stringify({'title': 'Mom', 'first': 'Emily', 'last': 'Vista', 'number': '(210) 367-7056'}))
AsyncStorage.setItem('Dad', JSON.stringify({'title': 'Dad', 'first': 'Jeff', 'last': 'Vista', 'number': '(919) 867-1134'}))

// HomeScreen: lists contacts by 'title'
class HomeScreen extends Component {
  static navigationOptions = {
    title: 'My Contacts',
  };

  render() {
    const { navigate } = this.props.navigation;
    console.log('test');
    return (
      <View>
      <Button 
      style={[styles.buttons]}
      title="Jane"
      onPress={() =>
        AsyncStorage.getItem('Jane', (err, item) => navigate('Profile', JSON.parse(item)))
        //navigate('Profile', JSON.parse(AsyncStorage.getItem('Jane')))
      }
      />
       <Button 
      style={[styles.buttons]}
      title="Drew"
      onPress={() =>
        AsyncStorage.getItem('Drew', (err, item) => navigate('Profile', JSON.parse(item)))
        //navigate('Profile', JSON.parse(AsyncStorage.getItem('Jane')))
      }
      />
       <Button 
      style={[styles.buttons]}
      title="Mom"
      onPress={() =>
        AsyncStorage.getItem('Mom', (err, item) => navigate('Profile', JSON.parse(item)))
        //navigate('Profile', JSON.parse(AsyncStorage.getItem('Jane')))
      }
      />
       <Button 
      style={[styles.buttons]}
      title="Dad"
      onPress={() =>
        AsyncStorage.getItem('Dad', (err, item) => navigate('Profile', JSON.parse(item)))
        //navigate('Profile', JSON.parse(AsyncStorage.getItem('Jane')))
      }
      />
      </View>
    );
  }
}

// ProfileScreen: shows first name, last name, and phone number of contact
class ProfileScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title,
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={[styles.containerMap]}>
      <MapView style={styles.map}
    region={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
      </View>
    );
  }
}

// EditScreen: allows user to modify first name, last name, and phone number of contact
class EditScreen extends Component {

  constructor(props) {
    super(props);
    this.state = this.props.navigation.state;
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Edit Contact',
  });

  render() {
    return(
      <View style={[styles.container]}>
      <Text> Nickname: {this.props.navigation.state.params.title} </Text>
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
      <Button
      title="Save" 
      onPress={() => {
        console.log(this.state.first)
        AsyncStorage.setItem(this.props.navigation.state.params.title, JSON.stringify({'first': this.state.first, 'last': this.state.last, 'number': this.state.number}))}
      }
      />
      </View>
    );
  }
}

// AddScreen: not yet implemented, will allow user to create a new contact
class AddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.navigation.state;
    var title;
    var first;
    var last;
    var number;
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Edit Contact',
  });

  render() {
    return(
      <View style={[styles.container]}>
      <Text> Nickname: </Text>
      <TextInput
        onChangeText={(text) => this.setState({text})}
        value={this.state.title}
      />
      <Text> First Name: </Text>
      <TextInput
        onChangeText={(text) => this.setState({text})}
        value={this.state.title}
      />
      <Text> Last Name: </Text>
      <TextInput
        onChangeText={(text) => this.setState({text})}
        value={this.state.title}
      />
      <Text> Number: </Text>
      <TextInput
        onChangeText={(text) => this.setState({text})}
        value={this.state.title}
      />
      </View>
    );
  }
}

// AppScenes: list of all screens used in the app
let AppScenes = {
  HomeScreen: {
    screen: HomeScreen
  },
  ProfileScreen: {
    screen: ProfileScreen
  },
}

// MyTransition: custom transition
let MyTransition = (index, position) => {
  const inputRange = [index -1, index, index + 0.99, index + 1];
  //const outputRange = [0, 1, 1, 0];
  const opacity = position.interpolate({
    inputRange,
    outputRange: ([0, 1, 1, 0]),
  });

  const translateX = 0;
  const translateY = position.interpolate({
    inputRange,
    outputRange: ([50, 0, 0, 0]),
  })

  /*const scaleY = position.interpolate({
    inputRange,
    outputRange,
  });*/

  return {
    opacity,
    transform:[ {translateX}, {translateY} ],
  };
};

const MyTransitionSpec = ({
  duration: 2000,
  easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
  timing: Animated.timing,
});

let TransitionConfiguration = () => {
  return {
    transitionSpec: MyTransitionSpec,
    screenInterpolator: (sceneProps) => {
      const {position, scene} = sceneProps;
      const {index} = scene;
      return MyTransition(index, position);
    }
  }
};

const help = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    Edit: {screen: EditScreen },
  },
  {
    transitionConfig: TransitionConfiguration
  }
);

var styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  contactName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  contactDetails: {
    fontSize: 18,
  },
  buttons: {
    color: 'black',
    fontSize: 15,
    textAlign: "left",
  },
  containerMap: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});


AppRegistry.registerComponent('help', () => help);