import React, { Component } from 'react';
import { AppRegistry,
  Text,
  View
} from 'react-native';
import Button from 'apsl-react-native-button';

export default class Welcome extends Component {
  render(){
    return(
      <View>
        <Text>QuestionAmble</Text>
        <Text>A Quest for Knowledge</Text>
        <Button style={{backgroundColor: 'red'}} textStyle={{fontSize: 18}}>
          Login
        </Button>
        <Button style={{backgroundColor: 'red'}} textStyle={{fontSize: 18}}>
          Sign Up
        </Button>
        <Text>*If you have a Quest Code, but don't have an account yet, sign up to play</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('QuestionAmbleFE', () => Welcome);
