import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, SectionList } from 'react-native';
import NavigationBar from '../General/NavigationBar.js';

export default class QuestionIndex extends Component {
  render() {
    return (
      <View>
        <NavigationBar/>
        <Text>Here are your questions:</Text>
        <Text>List here:</Text>
      </View>
    );
  }
}
