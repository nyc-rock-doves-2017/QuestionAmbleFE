import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from 'apsl-react-native-button';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import { TouchableWithoutFeedback, Keyboard } from 'react-native';

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
          <View style={styles.iconContainer}>
            <Icon name="thumbs-o-up" size={50} color='#1aa3ff' />
            <Text style={styles.title}>
              You're Correct!
            </Text>
          </View>
          <Text style={styles.subtitle}>
            Hit proceed to see where to go next!
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
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  },
  button: {
    backgroundColor: '#1aa3ff',
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
    color: '#1aa3ff',
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
