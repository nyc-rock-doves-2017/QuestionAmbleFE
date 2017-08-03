import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Form,
  Separator, InputField,
} from 'react-native-form-generator';

export default class QuestAction extends Component {
  static navigationOptions ={
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#1aa3ff'
    }
  }
  render() {
    return (
      <View style={styles.wholeScreen}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Icon name="map-signs" size={50} color='azure' />
          </View>
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
            <Button style={styles.button} onPress={() => this.props.navigation.navigate("MainMenu")}>
              <Text style={styles.buttonText}>
                HOME
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
    backgroundColor: '#F25F5C',
    borderRadius: 25,
    borderColor: 'azure',
    borderWidth: 2
  },
  wholeScreen: {
    backgroundColor: '#1aa3ff',
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
