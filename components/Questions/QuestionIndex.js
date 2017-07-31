import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList } from 'react-native';

export default class QuestionIndex extends Component {
  render() {
    let questData = this.props.screenProps.questData.filter( (data) => data.id === this.props.navigation.state.params.questID)
    return (
      <View>
        <Text>Here are your questions:</Text>
        <FlatList data={questData[0].questions} renderItem={({item}) =>
          <Text
            onPress={() => this.props.navigation.navigate("QuestionShow", {questID: this.props.navigation.state.params.questID, questionID: item.id})}
            >{item.id} - {item.questId} - {item.questionText}</Text>}/>
      </View>
    );
  }
}
