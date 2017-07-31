import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, SectionList, Button } from 'react-native';
import { Form, Separator, InputField, PickerField } from 'react-native-form-generator';

export default class QuestionNew extends Component {
  render() {

    let handleQuestionTextInputForNewQuestion = this.props.screenProps.handleQuestionTextInputForNewQuestion
    let handleQuestionAnswerInputForNewQuestion = this.props.screenProps.handleQuestionAnswerInputForNewQuestion
    let handleQuestionHintInputForNewQuestion = this.props.screenProps.handleQuestionHintInputForNewQuestion
    let handleQuestionClueTextForNewQuestion = this.props.screenProps.handleQuestionClueTextForNewQuestion
    let handleNewQuestionForm = this.props.screenProps.handleNewQuestionForm

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

          <Text>Clue Type:</Text>
          <PickerField value={"text"} options={{"":'',
                                text: "Text",
                                image: "Image"}}/>

          <Text>Clue Image:</Text>
          <InputField placeholder="Clue Image"/>

          <Text>Clue Text:</Text>
          <InputField
          placeholder="Clue Text"
          onChangeText={handleQuestionClueTextInputForNewQuestion}/>

          <Button
            onPress={() => this.props.navigation.navigate("QuestionIndex")}
            title="Create Question"/>
        </Form>
      </View>
    );
  }
}
