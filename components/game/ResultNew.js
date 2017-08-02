import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ScrollView, Text, View, SectionList, Button } from 'react-native';

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
      <ScrollView keyboardShouldPersistTaps="always" style={{paddingLeft:10, paddingRight:10, height:200, flex: 3, backgroundColor: '#06AED5'}}>
        <View style={styles.container}>
          <Text style={styles.title}>Processing your guess...</Text>
          <Text style={styles.title}>You'll see the same question appear if it's incorrect!</Text>
          <Button style={styles.button} title="Proceed" onPress={this.determineNextScreen}/>
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
