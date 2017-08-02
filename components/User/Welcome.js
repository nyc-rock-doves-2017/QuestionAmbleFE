import React, { Component } from 'react';
import { AppRegistry,
  Text,
  View,
  StyleSheet
} from 'react-native';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Welcome extends Component {
  static navigationOptions ={
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#06AED5'
    }
  }
  render(){
    return(
      <View style={styles.wholeScreen}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Icon name="lightbulb-o" size={75} color='azure' />
          </View>
          <Text style={styles.title}>QuestionAmble</Text>
          <Text style={styles.subtitle}>A Quest for Knowledge</Text>
          <View style={styles.buttonContainer}>
            <Button style={styles.button} onPress={() => this.props.navigation.navigate("Login")}>
              <Text style={styles.buttonText}>
                LOGIN
              </Text>
            </Button>
            <Button style={styles.button} onPress={() => this.props.navigation.navigate("NewAccount")}>
              <Text style={styles.buttonText}>
                SIGN UP
              </Text>
            </Button>
          </View>
          <Text style={styles.disclaimerText}>*If you have a Quest Code, but don't have an account yet, sign up to play!</Text>
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
  subtitle: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 10,
  },
  buttonText: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  disclaimerText: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 10,
    paddingLeft: 25,
    paddingRight: 25,
  }
});
