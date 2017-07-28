import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert
} from 'react-native';

import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField, DatePickerField, TimePickerField
} from 'react-native-form-generator';

export default class QuestionAmbleFE extends Component {
  constructor(props){
    super(props);
    this.state = {
      formData:{}
    }
  }
  handleFormChange(formData){
    this.setState({formData:formData})
    this.props.onFormChange && this.props.onFormChange(formData);
  }
  handleFormFocus(e, component){

  }
  render() {
    return (<View style={{paddingLeft:10,paddingRight:10, height:200}}>
      <Form
        ref='QuestionForm'
        onFocus={this.handleFormFocus.bind(this)}
        onChange={this.handleFormChange.bind(this)}
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
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
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

AppRegistry.registerComponent('QuestionAmbleFE', () => QuestionAmbleFE);
