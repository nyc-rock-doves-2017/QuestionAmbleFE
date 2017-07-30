import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

import { Form,
  Separator, InputField
} from 'react-native-form-generator';

export default class QuestCreation extends Component {

  render() {
    let handleQuestTitleInputForNewQuest = this.props.screenProps.handleQuestTitleInputForNewQuest
    let handleQuestDescriptionInputForNewQuest = this.props.screenProps.handleQuestDescriptionInputForNewQuest
    let handleQuestGameKeyInputForNewQuest = this.props.screenProps.handleQuestGameKeyInputForNewQuest
    let handleNewQuestForm = this.props.screenProps.handleNewQuestForm

    return (<View style={{paddingLeft:10, paddingRight:10, height:200}}>
      <Form
        ref='QuestForm'
        label="Quest Creator">
        <Text>Quest Title</Text>
        <InputField
          ref='title'
          placeholder='Quest Title'
          onChangeText={handleQuestTitleInputForNewQuest}/>

          <Text>Quest Description</Text>
          <InputField
            multiline = {true}
            placeholder='Quest Description'
            onChangeText={handleQuestDescriptionInputForNewQuest}/>

        <Separator />

        <Button
          onPress={handleNewQuestForm}
          title="Finish making Quest"/>
        </Form>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
