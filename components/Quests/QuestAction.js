import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

import { Form,
  Separator, InputField,
} from 'react-native-form-generator';

export default class QuestAction extends Component {
  render() {
    return (<View style={{paddingLeft:10,paddingRight:10, height:200}}>
        <Button
          onPress={() => this.props.navigation.navigate("QuestCreation")}
          title="Make A Quest"
        />
        <Button
          onPress={() => this.props.navigation.navigate("QuestIndex")}
          title="View Your Quests"
        />


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
