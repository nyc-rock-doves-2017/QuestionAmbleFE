import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, SectionList, Button } from 'react-native';

export default class ClueShow extends Component {
  constructor(props){
    super(props);
    this.props.screenProps.updateLocation();
    this.props.screenProps.getNextQuestion();
  }

  test(){
    console.log("Test")
  }
  render() {
  let {currentQuestion} = this.props.screenProps
    return (
      <View>
        <Text>Here's a clue to find your question...Where could it be?</Text>
        <Text>{currentQuestion.clueText}</Text>
        <Text onPress={this.test}>Check Location!</Text>

      </View>
    );
  }
}
