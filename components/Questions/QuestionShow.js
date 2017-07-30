import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, SectionList, Button } from 'react-native';

export default class QuestionShow extends Component {
  render() {
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate("QuestionEdit")} title="Edit Question"/>
        <Text>The is the question show page:</Text>
      </View>
    );
  }
}
