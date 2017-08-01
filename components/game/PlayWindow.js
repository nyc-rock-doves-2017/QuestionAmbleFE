import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, SectionList } from 'react-native';

export default class PlayWindow extends Component {
  render() {
    let question = this.props.screenProps.currentQuestion
    return (
      <View>
        <Text>You found the question! Here is your question:</Text>
        <Text>{question.questionText}</Text>
      </View>
    );
  }
}
