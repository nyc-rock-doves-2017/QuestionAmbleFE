import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Form,
        Separator,
        InputField
} from 'react-native-form-generator';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
  import { TouchableWithoutFeedback, Keyboard } from 'react-native';

export default class PlayWindow extends Component {
  static navigationOptions ={
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#C2D834'
    }
  }

  constructor(props){
    super(props);
    this.state = {
      status: "",
      formErrors: "",
    }
    this.checkAnswer = this.checkAnswer.bind(this)
  }

  checkAnswer(){
    currentContext = this
    fetch("https://questionamble.herokuapp.com/results",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ player_id: 2,
        question_id: currentContext.props.screenProps.currentQuestion.id,
        round_id: currentContext.props.screenProps.currentRoundID,
        user_guess: currentContext.props.screenProps.currentGuess
      })
    }).then(response => {
      return response.json()
    }).then(body => {
      if (body.result === "correct"){
        currentContext.props.screenProps.updateCurrentGuessStatus("correct")
        currentContext.props.screenProps.updatePreviousQuestionID(currentContext.props.screenProps.currentQuestion.id)

        if (body.game_status === "game complete"){
          currentContext.props.screenProps.updateGameStatus("game complete")
          currentContext.props.screenProps.getRoundInfo()
          this.props.navigation.navigate("RoundShow")

        }
        else{
          currentContext.props.screenProps.updateGameStatus("game incomplete")
          currentContext.props.screenProps.updateCurrentQuestion(body.next_question)
          this.props.navigation.navigate("ResultNew",{currentQ: this.props.screenProps.currentQuestion.id})
        }
        //body.next_question
      } else {
        this.setState({formErrors: "Wrong answer! Try again!!"})
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    let currentGuessStatus = this.props.screenProps.currentGuessStatus
    let processGuess = this.props.screenProps.processGuess
    let handleUserGuess = this.props.screenProps.handleUserGuess
    let question = this.props.screenProps.currentQuestion
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View keyboardShouldPersistTaps="always" style={styles.wholeScreen}>
          <View style={styles.container}>
            <Text style={styles.errorGreenBackground}>
              {this.state.formErrors}
            </Text>
            <View style={styles.iconStyles}>
              <Icon name="map-marker"
                size={50}
                color='#1aa3ff' />
            </View>
            <Text style={styles.title}>
              You're in the Right Spot!
            </Text>
            <Text style={styles.subtitle}>
              Answer this for your next clue...
            </Text>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>
                {question.question_text}
              </Text>
            </View>
            <Text style={styles.subtitleTwo}>
              Hint: {question.hint}
            </Text>
            <Form style={styles.form}>
              <Separator />
              <InputField
                editable={true}
                ref="userAnswer"
                placeholder="Enter your answer..."
                returnKeyType='next'
                onChangeText={handleUserGuess}
                multiline={true}
              />
            </Form>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.button}
                onPress={this.checkAnswer}>
                <Text style={styles.buttonText}>
                  SUBMIT
                </Text>
              </Button>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  errorGreenBackground: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#CE57A6'
  },
  button: {
    backgroundColor: '#1aa3ff',
    borderRadius: 25,
    borderColor: 'azure',
    borderWidth: 2
  },
  wholeScreen: {
    backgroundColor: '#C2D834',
    flex: 3
  },
  container: {
    marginTop: 30,
    paddingLeft: 10,
    paddingRight:10
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
    textAlign: 'center',
    paddingBottom: 25
  },
  subtitle: {
    color: '#1aa3ff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 5
  },
  subtitleTwo: {
    color: '#1aa3ff',
    fontSize: 18,
    textAlign: 'center',
    paddingRight: 25,
    paddingLeft: 25,
    fontStyle: 'italic'
  },
  buttonText: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  questionContainer: {
    backgroundColor: 'azure',
    borderColor: '#E6E6E6',
    borderWidth: 2,
    marginRight: 15,
    marginLeft: 15
  },
  question: {
    color: '#CE57A6',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 30
  },
  form: {
    marginRight: 15,
    marginLeft: 15,
  },
  iconStyles: {
    alignItems: 'center'
  }
});
