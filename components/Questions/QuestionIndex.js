import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView
} from 'react-native';
import Button from 'apsl-react-native-button';

export default class QuestionIndex extends Component {
  render() {
    let questData = this.props.screenProps.questData.filter( (data) => data.id === this.props.navigation.state.params.questID)
    return (
      <ScrollView keyboardShouldPersistTaps="always" style={{height:200, flex: 3, backgroundColor: '#06AED5'}}>
        <View style={styles.container}>
        <Text style={styles.title}>
          {questData[0].title}
        </Text>
        <Text style={styles.subSubtitle}>
          Questions
        </Text>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={() => this.props.navigation.navigate("QuestionNew", {questID: data[0].id})}>
            <Text style={styles.buttonText}>
              ADD QUESTION
            </Text>
          </Button>
        </View>
        <FlatList
          data={questData[0].questions}
          renderItem={({item}) =>
          <View style={styles.listItems}>
          <Text
            style={styles.listText}
            onPress={() => this.props.navigation.navigate("QuestionShow", {questID: this.props.navigation.state.params.questID, questionID: item.id})}
            key={item.id}>
            <Text >
              {item.questionText}
            </Text>
          </Text>
        </View>
        }/>
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
    marginTop: 20,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5
  },
  buttonContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
      color: 'azure',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center'
  },
  title: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 10,
  },
  listText: {
    color: '#6F706F',
    paddingLeft: 5,
    height: 40,
    fontSize: 14,
    fontWeight: 'bold',
  },
  listItems: {
    backgroundColor: 'azure',
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#E6E6E6',
    borderWidth: 1,
    paddingLeft: 5,
  },
  subSubtitle: {
    color: 'azure',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
});
