import React, { Component } from 'react';
import { AppRegistry,
  Text,
  View
} from 'react-native';
import NavigationBar from './components/General';
import PlayerStatistics from './components/User';

export default class UserProfile extends Component {
  render(){
    return(
      <View>
        <NavigationBar />
        <PlayerStatistics />
      </View>
    );
  }
}

AppRegistry.registerComponent('QuestionAmbleFE', () => UserProfile);
