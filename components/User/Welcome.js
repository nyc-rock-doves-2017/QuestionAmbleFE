import React, { Component } from 'react';
import { AppRegistry,
  Text,
  View,
  StyleSheet
} from 'react-native';
import Button from 'apsl-react-native-button';

export default class Welcome extends Component {
  render(){
    return(
      <View style={styles.wholeScreen}>
        <View style={styles.container}>
          <Text style={styles.title}>QuestionAmble</Text>
          <Text>A Quest for Knowledge</Text>
          <Button style={{backgroundColor: 'red'}} textStyle={{fontSize: 18}} onPress={() => this.props.navigation.navigate("Login")}>
            Login
          </Button>
          <Button style={{backgroundColor: 'red'}} textStyle={{fontSize: 18}} onPress={() => this.props.navigation.navigate("NewAccount")}>
            Sign Up
          </Button>
          <Text>*If you have a Quest Code, but don't have an account yet, sign up to play</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wholeScreen: {
    backgroundColor: '#66a3ff',
  },
  container: {
    marginTop: 40,
  },
  title: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  red: {
    color: 'red',
  },
});
