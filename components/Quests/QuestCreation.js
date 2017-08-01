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
  constructor(props){
    super(props);
    this.state = {
      formErrors: "",
    }
    this.processNewQuest = this.processNewQuest.bind(this)
  }

  processNewQuest(){
    this.props.screenProps.handleNewQuestForm()
    if (this.props.screenProps.newQuestionFormErrors === ""){
      this.props.screenProps.handleQuestData();
      this.props.navigation.navigate("QuestIndex")
    }
    else{
      this.setState({formErrors: "An error occurred. Please check all fields before submitting!"})
    }
  }

  render() {
    let handleQuestTitleInputForNewQuest = this.props.screenProps.handleQuestTitleInputForNewQuest
    let handleQuestDescriptionInputForNewQuest = this.props.screenProps.handleQuestDescriptionInputForNewQuest
    let handleQuestGameKeyInputForNewQuest = this.props.screenProps.handleQuestGameKeyInputForNewQuest
    let handleNewQuestForm = this.props.screenProps.handleNewQuestForm

    return (
      <ScrollView keyboardShouldPersistTaps="always" style={{paddingLeft:10, paddingRight:10, height:200, flex: 3, backgroundColor: '#06AED5'}}>
        <View style={styles.container}>
          <Text style={styles.title}>Create a New Quest</Text>
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
                <Button style={styles.button} onPress={this.processNewQuest}>
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
