import React, { Component } from 'react';
import { AppRegistry,
  Text,
  AsyncStorage,
  Alert,
  View,
  StyleSheet
} from 'react-native';
import Button from 'apsl-react-native-button';

export default class MainMenu extends Component {
  async userLogout() {
    try {
      await AsyncStorage.removeItem('id_token');
      Alert.alert("Logout Success!");
    } catch (error) {
      console.log('AsyncStorage error:' + error.message);
    }
  }

  render(){
    return(
      <View style={styles.wholeScreen}>
        <View style={styles.container}>
          <Text style={styles.title}>Main Menu</Text>
          <View style={styles.buttonContainer}>
            <Button style={styles.button} onPress={() => this.props.navigation.navigate("GameNew")}>
              <Text style={styles.buttonText}>
                PLAY A NEW QUEST
              </Text>
            </Button>
            <Button style={styles.button} onPress={() => this.props.navigation.navigate("QuestAction")}>
              <Text style={styles.buttonText}>
                MY QUESTS
              </Text>
            </Button>
            <Button style={styles.button} onPress={() => this.props.navigation.navigate("User Profile")}>
              <Text style={styles.buttonText}>
                MY PROFILE
              </Text>
            </Button>
            <Button style={styles.button} onPress={() => this.props.navigation.navigate("Welcome")}>
              <Text style={styles.buttonText}>
                LOG OUT
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
