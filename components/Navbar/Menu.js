import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Alert
} from 'react-native';
import Button from 'apsl-react-native-button';


export default class Menu extends React.Component {
  render() {
    return (
      <Button onPress={() => this.props.navigation.navigate("MainMenu")}
        title='home'>
      </Button>
    );
  }
}
