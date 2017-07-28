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

export default class QuestCreator extends Component {
  render() {
    return (<View style={{paddingLeft:10,paddingRight:10, height:200}}>
      <Form
        ref='QuestionForm'
        label="Question Creator">
        <Separator />
        <Text>Question</Text>
        <InputField
          ref='question'
          placeholder='Question'/>
          <Text>Answer</Text>
        <InputField
          multiline = {true}
          placeholder="Answer"
          />
          <Button
            onPress={() => {Alert.alert('Form submission not yet implemented!')}}
            title="Make another question"
          />
        <Button
          onPress={() => {Alert.alert('Form submission not yet implemented!')}}
          title="Finish making Quest"
        />
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
