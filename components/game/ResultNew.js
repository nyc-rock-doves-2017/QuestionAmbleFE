import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from 'apsl-react-native-button';

export default class ResultNew extends Component {
  static navigationOptions ={
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#C2D834'
    }
  }
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
      <View keyboardShouldPersistTaps="always" style={{backgroundColor: '#C2D834', flex: 3}}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Checking your guess...
          </Text>
          <Text style={styles.subtitle}>
            You'll see the same question appear if it's incorrect!
          </Text>
          <View style={styles.buttonContainer}>
            <Button style={styles.button} onPress={this.determineNextScreen}>
              <Text style={styles.buttonText}>
                PROCEED
              </Text>
          </Button>
        </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#06AED5',
    borderRadius: 25,
    borderColor: 'azure',
    borderWidth: 2
  },
  wholeScreen: {
    backgroundColor: '#C2D834',
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
  subtitle: {
    color: '#06AED5',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    fontWeight: 'bold',
    paddingLeft: 50,
    paddingRight: 50
  },
  buttonText: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  }
});
