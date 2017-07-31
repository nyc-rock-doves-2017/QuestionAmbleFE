import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';


export default class QuestShow extends Component {
  render() {
    let data = this.props.screenProps.questData.filter( (data) => data.id === this.props.navigation.state.params.id)

    return (<View style={{paddingLeft:10,paddingRight:10, height:200}}>
        <Text>Quest ID:</Text>
        <Text>{data[0].id}</Text>
        <Text>Quest Name</Text>
        <Text>{data[0].title}</Text>
        <Text>Quest Game Key</Text>
        <Text>{data[0].gameKey}</Text>
        <Text>Quest Description</Text>
        <Text>{data[0].description}</Text>
        <Text>Quest Creator</Text>
        <Text>{data[0].questCreator}</Text>
        <Text>Times Played</Text>
        <Text>{data[0].timesPlayed}</Text>
        <Text>Times Completed</Text>
        <Text>{data[0].timesCompleted}</Text>
        <Text>Completion Score</Text>
        <Text>{data[0].completionScore}</Text>
        <Text>Average Accuracy Score</Text>
        <Text>{data[0].avgAccuracyScore}</Text>
        <Text>Played By</Text>
        <Text>{data[0].playedBy}</Text>
        <Button onPress={() => this.props.navigation.navigate("QuestionIndex", {id: data[0].id})} title="View Question List"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
