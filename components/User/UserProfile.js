import React, { Component } from 'react';
import { AppRegistry,
  Text,
  View
} from 'react-native';
import PlayerStatistics from './PlayerStatistics.js';

export default class UserProfile extends Component {

  render(){
    let { playerStatistics, handleUserProfile } = this.props.screenProps
    return(
      <View>
        <PlayerStatistics playerStatistics={playerStatistics} handleUserProfile={handleUserProfile}/>
      </View>
    );
  }
}
