import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, SectionList, Button } from 'react-native';
import NavigationBar from '../General/NavigationBar.js';

export default class QuestionShow extends Component {
  render() {
    return (
      <View>
        <NavigationBar/>
        <Button onPress={() => this.props.navigation.navigate("QuestionEdit")} title="Edit Question"/>
        <Text>The is the question show page:</Text>
      </View>
    );
  }
}
