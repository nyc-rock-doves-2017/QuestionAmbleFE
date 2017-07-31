import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  FlatList
} from 'react-native';

export default class QuestIndex extends Component {
  componentDidMount(){
    this.props.screenProps.handleQuestData()
  }
  render() {
    let questData = this.props.screenProps.questData
    return (<View style={styles.container}>
      <Text style={styles.instructions}> Here are your completed quests</Text>
      <Text> ID | Title | Code </Text>
      <FlatList data={questData} renderItem={({item}) => <Text onPress={() => this.props.navigation.navigate("QuestShow", {questId: item.id})}
        key={item.id}>{item.id} - {item.title} - {item.gameKey}</Text>}/>
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
