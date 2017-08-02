import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, Button, View, SectionList } from 'react-native';

export default class RoundShow extends Component {
  render() {
    let currentGameResult = this.props.screenProps.currentGameResult
    return (
      <ScrollView keyboardShouldPersistTaps="always" style={{paddingLeft:10, paddingRight:10, height:200, flex: 3, backgroundColor: '#06AED5'}}>
          <View style={styles.container}>
          <Text style={styles.title}>Round Results:</Text>
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F25F5C',
    borderRadius: 25,
    borderColor: 'azure',
    borderWidth: 2
  },
  wholeScreen: {
    backgroundColor: '#06AED5',
    flex: 3
  },
  container: {
    marginTop: 100,
  },
  buttonContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  buttonText: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  }
});
