import React, { Component } from 'react';
import { AppRegistry,
  Text,
  View,
  FlatList,
  ListItem
} from 'react-native';

export default class PlayerStatistics extends Component {
  render(){
    let { playerStatistics } = this.props
    debugger
    return(
      <View>
        <Text>My Statistics</Text>
        <Text>Games Started: {playerStatistics.numGamesStarted}</Text>
        <Text>Games Completed: {playerStatistics.numGamesCompleted}</Text>
        <Text>Game Completion Rate: {playerStatistics.completenessPercentage}</Text>
        <Text>Overall Game Score: {playerStatistics.indAverageScore}</Text>
        <Text>{"\n"}</Text>
        <Text>Game History</Text>
        <FlatList
          data={playerStatistics.gamesPlayed}
          renderItem={({item}) =>
            <Text>
              {item.questTitle}
              {"\n"}
              Created by: {item.createdBy}
              {"\n"}
              Played on: {item.dateOfPlay}
              {"\n"}
              Score: {item.accuracyScore}
              {"\n"}
            </Text>
          }
        />
      </View>
    );
  }
}
