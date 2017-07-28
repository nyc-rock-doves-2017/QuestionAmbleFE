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
  Separator, InputField,
} from 'react-native-form-generator';

export default class QuestAction extends Component {
  render() {
    return (<View style={{paddingLeft:10,paddingRight:10, height:200}}>
      <Form
        ref='questForm'
        label="Quest Creator">
        <Separator />
        <Text>Quest Title</Text>
        <InputField
          ref='quest_title'
          placeholder='Title'/>
          <Text>Quest Description</Text>
        <InputField
          multiline = {true}
          placeholder="Description"
          />
        <Button
          onPress={() => {Alert.alert('Form submission not yet implemented!')}}
          title="Make Questions"
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
