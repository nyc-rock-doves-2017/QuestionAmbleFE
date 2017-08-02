import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Button, View, SectionList, TextInput } from 'react-native';

export default class PlayWindow extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: "",
    }
    this.checkAnswer = this.checkAnswer.bind(this)
  }
  
  checkAnswer(){
    this.props.screenProps.processGuess();
    if (this.props.screenProps.currentGuessStatus === "correct"){
      this.setState({status: "error"})

      this.props.navigation.navigate("ResultNew",{currentQ: this.props.screenProps.currentQuestion.id})

    }
  }
  render() {
    let currentGuessStatus = this.props.screenProps.currentGuessStatus
    let processGuess = this.props.screenProps.processGuess
    let handleUserGuess = this.props.screenProps.handleUserGuess
    let question = this.props.screenProps.currentQuestion
    return (
      <View>
        <Text>You found the question! Here is your question:</Text>
        <Text>{question.question_text}</Text>
        <Text>Your input:</Text>
        <TextInput
          multiline={true}
          placeholder="Enter a guess!"
          onChangeText={handleUserGuess}
        />

        <Button
          title="Take a guess!"
        onPress={this.checkAnswer}/>
      </View>
    );
  }
}
