import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, SectionList, Button } from 'react-native';
import { Form, Separator, InputField, PickerField } from 'react-native-form-generator';

export default class QuestionNew extends Component {
  render() {
    let handleQuestionNew = this.props.screenProps.handleQuestionNew
    let handleQuestionTextInputForNewQuestion = this.props.screenProps.handleQuestionTextInputForNewQuestion
    let handleQuestionAnswerputForNewQuestion = this.props.screenProps.handleQuestionAnswerputForNewQuestion
    let handleQuestionHintInputForNewQuestion = this.props.screenProps.handleQuestionHintInputForNewQuestion
    let handleQuestionClueTextInputForNewQuestion = this.props.screenProps.handleQuestionClueTextInputForNewQuestion
    return (
      <View>
        <Form
          ref="QuestionForm"
          label="New Question">
          <Text>Question:</Text>
          <InputField
          placeholder="Enter your text"
          onChangeText={handleQuestionTextInputForNewQuestion}/>

          <Text>Answer:</Text>
          <InputField
          placeholder="Answer"
          onChangeText={handleQuestionAnswerputForNewQuestion}/>

          <Text>Hint to the answer:</Text>
          <InputField
          placeholder="Hint to the answer"
          onChangeText={handleQuestionHintInputForNewQuestion}/>

          <Text>Clue Text:</Text>
          <InputField
          placeholder="Clue Text"
          onChangeText={handleQuestionClueTextInputForNewQuestion}/>

          <Button
            onPress={() => handleQuestionNew()}
            title="Create Question"/>
        </Form>
      </View>
    );
  }
}
