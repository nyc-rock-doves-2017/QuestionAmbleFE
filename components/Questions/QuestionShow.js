import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, SectionList, Button } from 'react-native';

export default class QuestionShow extends Component {
  render() {
    // debugger
    let questData = this.props.screenProps.questData.filter( (data) => data.id === this.props.navigation.state.params.questID)
    let question = questData[0].questions.filter( (question) => question.id === this.props.navigation.state.params.questionID)
    return (
      <View>
        <Text>The is the question show page:</Text>
        <Button onPress={() => this.props.navigation.navigate("QuestionEdit")} title="Edit Question"/>
        <Text>Question ID:</Text>
        <Text>{question[0].id}</Text>
        <Text>Question Text</Text>
        <Text>{question[0].questionText}</Text>
        <Text>Answer ID:</Text>
        <Text>{question[0].answer}</Text>
        <Text>Clue Text</Text>
        <Text>{question[0].clueText}</Text>
        <Text>Hint</Text>
        <Text>{question[0].hint}</Text>
        <Text>Quest ID</Text>
        <Text>{question[0].questId}</Text>
      </View>
    );
  }
}
