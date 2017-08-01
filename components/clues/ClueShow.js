import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, SectionList, Button } from 'react-native';

export default class ClueShow extends Component {
  constructor(props){
    super(props);
    this.state = {
      clue: "",
      location: "",
    }
    this.props.screenProps.updateLocation();
    this.checkQuestion = this.checkQuestion.bind(this)
  }

  checkQuestion(){
    this.props.screenProps.checkLocation();
    if (this.props.screenProps.currentLocationMatch === "found"){
      this.setState({location: "found"})
      this.props.navigation.navigate("PlayWindow")
    }
  }
  render() {
  let {currentQuestion} = this.props.screenProps
    return (
      <View>
        <Text>Here's a clue to find your question...Where could it be?</Text>
        <Text>{currentQuestion.question_text}</Text>
        <Button title="Check Location" onPress={this.checkQuestion}/>

      </View>
    );
  }
}
