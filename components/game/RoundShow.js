import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Button, View, SectionList } from 'react-native';

export default class RoundShow extends Component {
  render() {
    let currentGameResult = this.props.screenProps.currentGameResult
    return (
      <View>
        <Text>Round Results:</Text>
        <Text>Created By:</Text>
        <Text>{currentGameResult.createdBy}</Text>
        <Text>Quest Title: </Text>
        <Text>{currentGameResult.questTitle}</Text>
        <Text>Played By: </Text>
        <Text>{currentGameResult.playedBy}</Text>
        <Text>Completion Score: </Text>
        <Text>{currentGameResult.completionScore}</Text>
        <Text>Accuracy Score:</Text>
        <Text>{currentGameResult.accuracyScore}</Text>
        <Text>Date Played:</Text>
        <Text>{currentGameResult.dateOfPlay}</Text>
        <Button onPress={() => this.props.navigation.navigate("MainMenu")} title="MainMenu"/>
      </View>
    );
  }
}
