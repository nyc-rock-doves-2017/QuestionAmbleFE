import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, SectionList } from 'react-native';

export default class ClueShow extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let {currentQuestion} = this.props.screenProps
    return (
      <View>
        <Text>Here's a clue to find your question:</Text>
        <Text>{currentQuestion.id}</Text>
        <Text>{currentQuestion.questId}</Text>
        <Text>{currentQuestion.questionText}</Text>
        <Text>{currentQuestion.q_text}</Text>
        <Text>{currentQuestion.answer}</Text>
        <Text>{currentQuestion.hint}</Text>
      </View>
    );
  }
}
//
