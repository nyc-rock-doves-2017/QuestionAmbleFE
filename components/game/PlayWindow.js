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
        <View keyboardShouldPersistTaps="always" style={styles.wholeScreen}>
          <View style={styles.container}>
            <View style={styles.iconStyles}>
              <Icon name="map-marker"
                size={50}
                color='#F25F5C' />
            </View>
            <Text style={styles.title}>
              You're in the Right Spot!
            </Text>
            <Text style={styles.subtitle}>
              Answer this question for your next clue:
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
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#06AED5',
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
    color: '#06AED5',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 5
  },
  subtitleTwo: {
    color: '#06AED5',
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
    textAlign: 'center',
    alignItems: 'center'
  }
});
