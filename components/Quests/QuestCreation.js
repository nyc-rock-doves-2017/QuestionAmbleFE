import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView
} from 'react-native';
import { Form,
  Separator,
  InputField
} from 'react-native-form-generator';
import Button from 'apsl-react-native-button';

export default class QuestCreation extends Component {
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
    this.processNewQuest = this.processNewQuest.bind(this)
  }

  processNewQuest(){
    // this.props.screenProps.handleNewQuestForm()
    currentContext = this;
    fetch("https://questionamble.herokuapp.com/quests",{ //Replace link with "/quests/"
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({quest: {title: currentContext.props.screenProps.newQuestFormQuestTitle,
                            description: currentContext.props.screenProps.newQuestFormQuestDescription,
                            creator_id: "2"}
                          })
    }).then(
      response => {
        return response.json()})
    .then(body => {
      if (body.hasOwnProperty("error")){
        currentContext.props.screenProps.updateNewQuestFormErrors(body.error)
        currentContext.setState({formErrors: "An error occurred. Please check all fields before submitting!"})

      }
      else{
        currentContext.props.screenProps.resetNewQuestForm();
        currentContext.props.navigation.navigate("QuestIndex")
      }
      // if (this.props.screenProps.newQuestionFormErrors === ""){
      //   this.props.screenProps.handleQuestData();
      //   this.props.navigation.navigate("QuestIndex")
      // }
      // else{
      //   this.setState({formErrors: "An error occurred. Please check all fields before submitting!"})
      // }
    })
    .catch( err => {
      console.log(err)
    })




    // if (this.props.screenProps.newQuestionFormErrors === ""){
    //   this.props.screenProps.handleQuestData();
    //   this.props.navigation.navigate("QuestIndex")
    // }
    // else{
    //   this.setState({formErrors: "An error occurred. Please check all fields before submitting!"})
    // }
  }

  onSubmitForm(e){
    if (this.props.screenProps.newQuestFormQuestTitle === "" ||
        this.props.screenProps.newQuestFormQuestDescription === ""){
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
      this.processNewQuest();
    }
  }

  render() {
    let handleQuestTitleInputForNewQuest = this.props.screenProps.handleQuestTitleInputForNewQuest
    let handleQuestDescriptionInputForNewQuest = this.props.screenProps.handleQuestDescriptionInputForNewQuest
    let handleQuestGameKeyInputForNewQuest = this.props.screenProps.handleQuestGameKeyInputForNewQuest
    let handleNewQuestForm = this.props.screenProps.handleNewQuestForm

    return (
      <ScrollView keyboardShouldPersistTaps="always" style={{paddingLeft:10, paddingRight:10, height:200, flex: 3, backgroundColor: '#1aa3ff'}}>
        <View style={styles.container}>
          <Text style={styles.title}>Create a New Quest</Text>
          <Text>{this.state.formErrors}</Text>
          <Form
            ref='QuestForm'
            label="QuestCreator">
            <Separator />
            <InputField
              ref='title'
              placeholder='Title'
              onChangeText={handleQuestTitleInputForNewQuest}/>
            <InputField
              multiline = {true}
              placeholder='Description'
              onChangeText={handleQuestDescriptionInputForNewQuest}
              />
          </Form>
              <View style={styles.buttonContainer}>
                <Button style={styles.button}
                  onPress={(e) => this.onSubmitForm(e)}>
                  <Text style={styles.buttonText}>
                    CREATE QUEST
                  </Text>
                </Button>
              </View>
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
    backgroundColor: '#1aa3ff',
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
