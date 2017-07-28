import React, { Component } from 'react';
import { AppRegistry,
  Text,
  View
} from 'react-native';
import Button from 'apsl-react-native-button';

export default class MainMenu extends Component {
  render(){
    return(
      <View>
        <Text>Main Menu</Text>
        <Button style={{backgroundColor: 'red'}} textStyle={{fontSize: 18}}>
          Play Game
        </Button>
        <Button style={{backgroundColor: 'red'}} textStyle={{fontSize: 18}}>
          My Quests
        </Button>
        <Button style={{backgroundColor: 'red'}} textStyle={{fontSize: 18}}>
          My Profile
        </Button>
        <Button style={{backgroundColor: 'red'}} textStyle={{fontSize: 18}}>
          Log Out
        </Button>
      </View>
    );
  }
}

AppRegistry.registerComponent('QuestionAmbleFE', () => MainMenu);
