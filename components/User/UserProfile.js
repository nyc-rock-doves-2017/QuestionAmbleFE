import React, { Component } from 'react';
import { AppRegistry,
  Text,
  View
} from 'react-native';
import NavigationBar from '../General/NavigationBar.js';
import PlayerStatistics from './PlayerStatistics.js';

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
