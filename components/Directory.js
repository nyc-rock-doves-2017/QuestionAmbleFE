import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';

export default class Directory extends Component {
  render() {
    return (
      <ScrollView keyboardShouldPersistTaps={"always"} style={{paddingLeft:10,paddingRight:10, height:200}}>
        <Text style={styles.welcome}> Directory </Text>

        <Text style={styles.welcome}> Users </Text>
        <Button onPress={() => this.props.navigation.navigate("Login")} title="Login"/>
        <Button onPress={() => this.props.navigation.navigate("MainMenu")} title="MainMenu"/>
        <Button onPress={() => this.props.navigation.navigate("NewAccount")} title="NewAccount"/>
        {/* <Button onPress={() => this.props.navigation.navigate("PlayerStatistics")} title="PlayerStatistics"/> */}
        <Button onPress={() => this.props.navigation.navigate("UserProfile")} title="UserProfile"/>
        <Button onPress={() => this.props.navigation.navigate("Welcome")} title="Welcome"/>


        <Text style={styles.welcome}> Questions </Text>
        {/* <Button onPress={() => this.props.navigation.navigate("QuestionIndex")} title="Question Index"/>
        <Button onPress={() => this.props.navigation.navigate("QuestionShow")} title="Question Show"/> */}
        <Button onPress={() => this.props.navigation.navigate("QuestionNew")} title="Question New"/>
        <Button onPress={() => this.props.navigation.navigate("QuestionEdit")} title="Question Edit"/>

        <Text style={styles.welcome}> Clues </Text>
        <Button onPress={() => this.props.navigation.navigate("ClueShow")} title="Show Clue"/>

        <Text style={styles.welcome}> Quests </Text>
        <Button onPress={() => this.props.navigation.navigate("QuestAction")} title="Quest Action"/>
        <Button onPress={() => this.props.navigation.navigate("QuestCreation")} title="Quest Creation"/>
        <Button onPress={() => this.props.navigation.navigate("QuestIndex")} title="Quest Index"/>
        <Button onPress={() => this.props.navigation.navigate("QuestShow")} title="Quest Show"/>

        <Text style={styles.welcome}> Game </Text>
        <Button onPress={() => this.props.navigation.navigate("PlayWindow")} title="Game Start"/>
        <Button onPress={() => this.props.navigation.navigate("ResultNew")} title="New Result"/>
        <Button onPress={() => this.props.navigation.navigate("ResultWin")} title="Result Win"/>
        <Button onPress={() => this.props.navigation.navigate("ResultLose")} title="Result Lose"/>
        <Button onPress={() => this.props.navigation.navigate("RoundShow")} title="Scores"/>
        <Button onPress={() => this.props.navigation.navigate("GameNew")} title="New Game"/>

      </ScrollView>
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
