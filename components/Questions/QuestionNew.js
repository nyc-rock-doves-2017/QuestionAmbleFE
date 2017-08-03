import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  SectionList,
  Dimensions,
  ScrollView,
  Alert
} from 'react-native';
import { Form,
  Separator,
  InputField
} from 'react-native-form-generator';
import Button from 'apsl-react-native-button';
var {height, width} = Dimensions.get('window');
import MapView from 'react-native-maps';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

export default class QuestionNew extends Component {
  static navigationOptions ={
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#1aa3ff'
    }
  }
  constructor(props){
    super(props);
    this.state = {
      formErrors: "",
    }
    this.props.screenProps.updateLocation();
    this.processNewQuestion = this.processNewQuestion.bind(this)
  }

  processNewQuestion(){
    // currentContext = this;
    // fetch("https://questionamble.herokuapp.com/questions",{
    //   method: "POST",
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify({question: { quest_id: currentContext.props.navigation.state.params.questId,
    //     question_text: currentContext.props.screenProps.newQuestionFormText,
    //     answer: currentContext.props.screenProps.newQuestionFormAnswer,
    //     clue_type: "text",
    //     clue_text: currentContext.props.screenProps.newQuestionFormClueText,
    //     hint: currentContext.props.screenProps.newQuestionFormHint,
    //     lat: currentContext.props.screenProps.currentLat,
    //     lng: currentContext.props.screenProps.currentLng,
    //   }})
    // }).then((response => {
    //   return response.json()})
    // ).then(body => {
    //   if (body.hasOwnProperty("error")){
    //     currentContext.props.screenProps.updateNewQuestionFormErrors(body.error)
    //     currentContext.setState({formErrors: body.error})
    //   } else {
    //     currentContext.props.navigation.navigate("QuestIndex")
    //   }
    // })
    // .catch(err => {
    //   console.log(err)
    // })

    // this.props.screenProps.handleQuestionNew()
    // if (this.props.screenProps.newQuestionFormErrors === ""){
    //   this.props.navigation.navigate("QuestIndex")
    // }
    // else{
    //   this.setState({formErrors: "An error occurred. Please check all fields before submitting!"})
    // }
  }

  onSubmitForm(e){
    if (this.props.screenProps.newQuestionFormText === "" ||
        this.props.screenProps.newQuestionFormAnswer === "" ||
        this.props.screenProps.newQuestionFormHint === "" ||
        this.props.screenProps.newQuestionFormClueText === ""){
        Alert.alert(
          'All Fields Are Required',
          'Please complete all fields before submitting.',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
        { cancelable: false }
      )
    }
    else {
      currentContext = this;
      fetch("https://questionamble.herokuapp.com/questions",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({question: { quest_id: currentContext.props.navigation.state.params.questID,
          question_text: currentContext.props.screenProps.newQuestionFormText,
          answer: currentContext.props.screenProps.newQuestionFormAnswer,
          clue_type: "text",
          clue_text: currentContext.props.screenProps.newQuestionFormClueText,
          hint: currentContext.props.screenProps.newQuestionFormHint,
          lat: currentContext.props.screenProps.currentLat,
          lng: currentContext.props.screenProps.currentLng,
        }})
      }).then((response => {
        return response.json()})
      ).then(body => {
        if (body.hasOwnProperty("error")){
          currentContext.props.screenProps.updateNewQuestionFormErrors(body.error)
          currentContext.setState({formErrors: body.error})
        } else {
          currentContext.props.screenProps.resetNewQuestionForm()
          currentContext.props.navigation.navigate("QuestIndex")
        }
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  render() {
    let handleQuestionNew = this.props.screenProps.handleQuestionNew
    let handleQuestionTextInputForNewQuestion = this.props.screenProps.handleQuestionTextInputForNewQuestion
    let handleQuestionAnswerputForNewQuestion = this.props.screenProps.handleQuestionAnswerputForNewQuestion
    let handleQuestionHintInputForNewQuestion = this.props.screenProps.handleQuestionHintInputForNewQuestion
    let handleQuestionClueTextInputForNewQuestion = this.props.screenProps.handleQuestionClueTextInputForNewQuestion
    let currentLat = this.props.screenProps.currentLat
    let currentLng = this.props.screenProps.currentLng
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView keyboardShouldPersistTaps="always" style={{height:200, flex: 3, backgroundColor: '#1aa3ff'}}>
          <View style={styles.container}>
            <Text style={styles.title}>
              Create a New Question
            </Text>
            <Text>{this.state.formErrors}</Text>
            <Form
              ref="QuestionForm"
              label="New Question">


              <View>
                <Text style={styles.explanationTextFirst}>
                  Help the player find the question location, give them a clue:
                </Text>
                <InputField
                  placeholder="Enter the location clue"
                  onChangeText={handleQuestionClueTextInputForNewQuestion}/>
              </View>

              <View>
                <Text style={styles.explanationText}>
                  Question to display once the player has found the clue location:
                </Text>
                <InputField
                placeholder="Enter the question"
                value={this.state.value}
                onChangeText={handleQuestionTextInputForNewQuestion}/>
              </View>

              <View>
                <Text style={styles.explanationText}>
                  Answer to the question:
                </Text>
                <InputField
                placeholder="Enter the answer"
                onChangeText={handleQuestionAnswerputForNewQuestion}/>
              </View>


            <View>
              <Text style={styles.explanationText}>
                Give the player a hint if they get the answer incorrect:
              </Text>
              <InputField
              placeholder="Enter the hint"
              onChangeText={handleQuestionHintInputForNewQuestion}/>
            </View>

              <Text style={styles.explanationTextTwo}>Using the map below, verify that you are setting this question in the right location - then hit the 'SUBMIT' button below.</Text>
            </Form>
          </View>
          <MapView
            style={styles.map}
            region={{
              latitude: Number(currentLat),
              longitude: Number(currentLng),
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421,
            }}>
                <MapView.Marker
                  coordinate={{latitude: Number(currentLat), longitude: Number(currentLng)}}
                />
            </MapView>
            <View style={styles.buttonContainer}>
              <Button style={styles.button}
                onPress={(e) => this.onSubmitForm(e)}>
                <Text style={styles.buttonText}>
                  CREATE QUESTION
                </Text>
              </Button>
            </View>
            <Button style={styles.button} onPress={() => this.props.navigation.navigate("MainMenu")}>
              <Text style={styles.buttonText}>
                HOME
              </Text>
            </Button>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: 300,
    width: width,
  },
  button: {
    backgroundColor: '#F25F5C',
    borderRadius: 25,
    borderColor: 'azure',
    borderWidth: 2
  },
  wholeScreen: {
    backgroundColor: '#1aa3ff',
    flex: 3
  },
  container: {
    marginTop: 20,
    paddingRight: 10,
    paddingLeft: 10
  },
  buttonContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  subtitle: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 10,
  },
  buttonText: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  explanationTextFirst: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  explanationText: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  explanationTextTwo: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
  }
});
