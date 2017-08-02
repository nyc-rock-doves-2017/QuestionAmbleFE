import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ScrollView,Text, Button, View, SectionList, TextInput } from 'react-native';

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
    if ((this.props.screenProps.currentQuestion.id != this.props.screenProps.previousQuestionID)){
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
        <ScrollView keyboardShouldPersistTaps="always" style={{paddingLeft:10, paddingRight:10, height:200, flex: 3, backgroundColor: '#06AED5'}}>
          <View style={styles.container}>
            <Text style={styles.title}>You found the question! Here is your question:</Text>
            <Text style={styles.title}>{question.question_text}</Text>
            <Text style={styles.title}>Hint</Text>
            <Text style={styles.title}>{question.hint}</Text>
            <Text style={styles.title}>Your input:</Text>
            <TextInput
              multiline={true}
              placeholder="Enter a guess!"
              onChangeText={handleUserGuess}
            />

            <Button
              title="Take a guess!"
              style={styles.button} 
            onPress={this.checkAnswer}/>
          </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F25F5C',
    borderRadius: 25,
    borderColor: 'azure',
    borderWidth: 2
  },
  wholeScreen: {
    backgroundColor: '#06AED5',
    flex: 3
  },
  container: {
    marginTop: 100,
  },
  buttonContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  buttonText: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  }
});
