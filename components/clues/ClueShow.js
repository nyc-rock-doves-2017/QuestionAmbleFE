import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, View, SectionList, Button } from 'react-native';

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
      <ScrollView keyboardShouldPersistTaps="always" style={{paddingLeft:10, paddingRight:10, height:200, flex: 3, backgroundColor: '#06AED5'}}>
        <View style={styles.container}>
          <Text style={styles.title}>Here's a clue to find your question...Where could it be?</Text>
          <Text style={styles.title}>{currentQuestion.question_text}</Text>
          <Button style={styles.button} title="Check Location" onPress={this.checkQuestion}/>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F25F5C',
    borderRadius: 25,
    borderColor: 'azure',
    borderWidth: 2
  },
  wholeScreen: {
    backgroundColor: '#06AED5',
    flex: 3
  },
  container: {
    marginTop: 100,
  },
  buttonContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  buttonText: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  }
});
