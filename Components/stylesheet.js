import { StyleSheet } from 'react-native';

export var styles = StyleSheet.create({
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
  button: {
    margin: 20,
  },
  containerMap: {
    ...StyleSheet.absoluteFillObject,
    height: 600,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  img: {
    height: 50,
    width: 50,
    margin: 20,
  }
});