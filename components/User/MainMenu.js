import React, { Component } from 'react';
import { AppRegistry,
  Text,
  AsyncStorage,
  Alert,
  View,
  StyleSheet
} from 'react-native';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MainMenu extends Component {
  static navigationOptions ={
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#1aa3ff'
    }
  }
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
          <View style={styles.iconContainer}>
            <Icon name="lightbulb-o" size={50} color='azure' />
          </View>
          <Text style={styles.title}>QuestionAmble</Text>
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
            <Button style={styles.button} onPress={() => this.props.navigation.navigate("UserProfile")}>
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
    marginTop: 80,
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
