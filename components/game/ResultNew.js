import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, SectionList, Button } from 'react-native';

export default class ResultNew extends Component {
  constructor(props){
    super(props);

    this.determineNextScreen = this.determineNextScreen.bind(this)
  }

  determineNextScreen(){
    // this.props.screenProps.getNextQuestion();
    debugger
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
        <Text>Congrats! You won! Press click to go to the next screen.</Text>
        <Button title="Proceed" onPress={this.determineNextScreen}/>
      </View>
    );
  }
}
