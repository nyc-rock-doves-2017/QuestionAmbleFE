import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import Button from 'apsl-react-native-button';

import { Form,
  Separator, InputField,
} from 'react-native-form-generator';

export default class QuestAction extends Component {
  render() {
    return (
      <View style={styles.wholeScreen}>
        <View style={styles.container}>
          <Text style={styles.title}>Choose Your Adventure...</Text>
          <View style={styles.buttonContainer}>
            <Button style={styles.button} onPress={() => this.props.navigation.navigate("QuestCreation")}>
              <Text style={styles.buttonText}>
                MAKE A NEW QUEST
              </Text>
            </Button>
            <Button style={styles.button} onPress={() => this.props.navigation.navigate("QuestIndex")}>
              <Text style={styles.buttonText}>
                VIEW MY QUESTS
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
    backgroundColor: '#FB8422',
    borderRadius: 25,
    borderColor: 'azure',
    borderWidth: 2
  },
  wholeScreen: {
    backgroundColor: '#66a3ff',
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
    fontSize: 27,
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
    textAlign: 'center',
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
