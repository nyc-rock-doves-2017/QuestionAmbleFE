import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, SectionList, Button } from 'react-native';

export default class ClueShow extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   currentQuestion: {
    //     id: "",
    //     questId: "",
    //     questionText: "",
    //     q_text: "",
    //     answer: "",
    //     hint: ""
    //   }
    // }
    this.props.screenProps.getNextQuestion();
  }
  render() {
  let {currentQuestion} = this.props.screenProps
    return (
      <View>
        <Text>Here's a clue to find your question...Where could it be?</Text>
        <Text>{currentQuestion.clueText}</Text>
          <Text> CHECK LOCATION </Text>
      </View>
    );
  }
}
