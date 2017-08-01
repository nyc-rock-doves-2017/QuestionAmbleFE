import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  SectionList,
  Dimensions,
  ScrollView
} from 'react-native';
import { Form,
  Separator,
  InputField
} from 'react-native-form-generator';
import Button from 'apsl-react-native-button';
var {height, width} = Dimensions.get('window');
import MapView from 'react-native-maps';

export default class QuestionNew extends Component {
  constructor(props){
    super(props);
    this.state = {
      formErrors: "",
    }
    this.props.screenProps.updateLocation();
    this.processNewQuestion = this.processNewQuestion.bind(this)
  }

  processNewQuestion(){
    this.props.screenProps.handleQuestionNew()
    if (this.props.screenProps.newQuestionFormErrors === ""){
      this.props.screenProps.handleQuestData();
      this.props.navigation.navigate("QuestIndex")
    }
    else{
      this.setState({formErrors: "An error occurred. Please check all fields before submitting!"})
    }
  }
  render() {
    let handleQuestionNew = this.props.screenProps.handleQuestionNew
    let handleQuestionTextInputForNewQuestion = this.props.screenProps.handleQuestionTextInputForNewQuestion
    let handleQuestionAnswerputForNewQuestion = this.props.screenProps.handleQuestionAnswerputForNewQuestion
    let handleQuestionHintInputForNewQuestion = this.props.screenProps.handleQuestionHintInputForNewQuestion
    let handleQuestionClueTextInputForNewQuestion = this.props.screenProps.handleQuestionClueTextInputForNewQuestion
    let newQuestionFormLat = this.props.screenProps.newQuestionFormLat
    let newQuestionFormLng = this.props.screenProps.newQuestionFormLng
    return (
      <ScrollView keyboardShouldPersistTaps="always" style={{height:200, flex: 3, backgroundColor: '#06AED5'}}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Create a New Question
          </Text>
          <Text>{this.state.formErrors}</Text>
          <Form
            ref="QuestionForm"
            label="New Question">

            <View>
              <Text style={styles.explanationText}>
                Help the played find the question location, give them a clue:
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
                Give the player a hint if they get the asnwer incorrect:
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
            latitude: newQuestionFormLat,
            longitude: newQuestionFormLng,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          }}>
              <MapView.Marker
                coordinate={{latitude: newQuestionFormLat, longitude: newQuestionFormLng}}
              />
          </MapView>
          <View style={styles.buttonContainer}>
            <Button style={styles.button}
            onPress={this.processNewQuestion}>
              <Text style={styles.buttonText}>
                CREATE QUESTION
              </Text>
            </Button>
          </View>
      </ScrollView>
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
    backgroundColor: '#06AED5',
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
    paddingBottom: 15
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
