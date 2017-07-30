import React, { Component } from 'react';
import { AppRegistry,
  Text,
  AsyncStorage,
  Alert,
  View
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
      <View>
        <Text>Main Menu</Text>
        <Button style={{backgroundColor: 'red'}} textStyle={{fontSize: 18}} onPress={() => this.props.navigation.navigate("GameNew")}>
          Play New Game
        </Button>
        <Button style={{backgroundColor: 'red'}} textStyle={{fontSize: 18}} onPress={() => this.props.navigation.navigate("QuestAction")}>
          My Quests
        </Button>
        <Button style={{backgroundColor: 'red'}} textStyle={{fontSize: 18}} onPress={() => this.props.navigation.navigate("UserProfile")}>
          My Profile
        </Button>
        <Button style={{backgroundColor: 'red'}} textStyle={{fontSize: 18}} onPress={() => this.props.navigation.navigate("Welcome")}>
          Log Out
        </Button>
      </View>
    );
  }
}
