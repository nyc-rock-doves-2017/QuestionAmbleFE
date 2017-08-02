import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, SectionList, Button } from 'react-native';

export default class ResultNew extends Component {
  constructor(props){
    super(props);

    this.determineNextScreen = this.determineNextScreen.bind(this)
  }

  determineNextScreen(){
    // this.props.screenProps.getNextQuestion();
      if (this.props.screenProps.gameStatus === "game complete"){
        this.props.navigation.navigate("RoundShow")
      }
      else{
        this.props.navigation.navigate("ClueShow")
      }

  }
  render() {
    return (
      <View>
        <Text>Processing your guess...</Text>
        <Text>You'll see the same question appear if it's incorrect!</Text>
        <Button title="Proceed" onPress={this.determineNextScreen}/>
      </View>
    );
  }
}
