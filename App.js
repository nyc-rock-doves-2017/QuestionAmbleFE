/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import QuestionIndex from './components/questions/QuestionIndex.js';
import QuestionShow from './components/questions/QuestionShow.js';
import QuestionNew from './components/questions/QuestionNew.js';
import QuestionEdit from './components/questions/QuestionEdit.js';

export default class QuestionAmbleFE extends Component {
  static navigationOptions = {
    title: "QuestionAmbleFE",
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Directory </Text>
        <Button onPress={() => this.props.navigation.navigate("QuestionIndex")} title="Question Index"/>
        <Button onPress={() => this.props.navigation.navigate("QuestionShow")} title="Question Show"/>
        <Button onPress={() => this.props.navigation.navigate("QuestionNew")} title="Question New"/>
        <Button onPress={() => this.props.navigation.navigate("QuestionEdit")} title="Question Edit"/>
      </View>
    );
  }
}

const AppDirectory = StackNavigator({
  Directory: {
    screen: QuestionAmbleFE,
  },
  // Welcome: {
  //   screen: Welcome,
  // },
  // Login: {
  //   path:,
  //   screen: Login,
  // },
  // Signup: {
  //   path:,
  //   screen: Signup,
  // },
  // MainMenu: {
  //   path:,
  //   screen: MainMenu,
  // },
  // Profile: {
  //   path:,
  //   screen: Profile,
  // },
  // QuestAction: {
  //   path:,
  //   screen: QuestAction,
  // },
  // QuestShow: {
  //   path:,
  //   screen: QuestShow,
  // },
  // QuestCreation: {
  //   path:,
  //   screen: QuestCreation,
  // },
  // QuestIndex: {
  //   path:,
  //   screen: QuestIndex,
  // },
  QuestionIndex: {
    screen: QuestionIndex
  },
  QuestionShow: {
    screen: QuestionShow,
  },
  QuestionNew: {
    screen: QuestionNew,
  },
  QuestionEdit: {
    screen: QuestionEdit,
  },
  // ClueShow: {
  //   path:,
  //   screen: ClueShow,
  // },
  // PlayWindow: {
  //   path:,
  //   screen: PlayWindow,
  // },
  // ResultNew: {
  //   path:,
  //   screen: ResultNew,
  // },
  // ResultWin: {
  //   path:,
  //   screen: ResultWin,
  // },
  // ResultLose: {
  //   path:,
  //   screen: ResultLose,
  // },
  // RoundShow: {
  //   path:,
  //   screen: RoundShow,
  // },
  // GameNew: {
  //   path:,
  //   screen: GameNew,
  // },
});

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

AppRegistry.registerComponent('QuestionAmbleFE', () => AppDirectory);
// AppRegistry.registerComponent('QuestionAmbleFE', () => QuestionAmbleFE);
