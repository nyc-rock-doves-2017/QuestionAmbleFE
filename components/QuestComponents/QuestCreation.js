import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

import NavigationBar from '/General/NavigationBar.js'

import { Form,
  Separator, InputField
} from 'react-native-form-generator';

export default class QuestCreation extends Component {
  render() {
    return (<View style={{paddingLeft:10,paddingRight:10, height:200}}>
      <NavigationBar/>
      <Form
        ref='QuestForm'
        label="Quest Creator">
        <Text>Quest Title</Text>
        <InputField
          ref='title'
          placeholder='Quest Title'/>
          <Text>Quest Description</Text>
          <InputField
            multiline = {true}
            placeholder='Quest Description'/>
        <Separator />
        <Text>Question</Text>
        <InputField
          ref='question'
          placeholder='Question'/>
          <Text>Answer</Text>
        <InputField
          placeholder="Answer"
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
