import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView
} from 'react-native';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class QuestionIndex extends Component {
  static navigationOptions ={
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#1aa3ff'
    }
  }
  render() {
    let questData = this.props.screenProps.questData.filter( (data) => data.id === this.props.navigation.state.params.questID)
    return (
      <ScrollView keyboardShouldPersistTaps="always" style={{height:200, flex: 3, backgroundColor: '#1aa3ff'}}>
        <View style={styles.container}>
        <Text style={styles.title}>
          {questData[0].title}
        </Text>
        <Text style={styles.subSubtitle}>
          Questions
        </Text>
        <FlatList
          data={questData[0].questions}
          renderItem={({item}) =>
          <View style={styles.listItems}>
            <View>
              <Text
                style={styles.listText}
                onPress={() => this.props.navigation.navigate("QuestionShow", {questID: this.props.navigation.state.params.questID, questionID: item.id})}
                key={item.id}>
                <Text>
                  {item.questionText}
                </Text>
              </Text>
          </View>
            <View style={styles.right}>
              <Icon name="angle-right"
                size={30} color='#A33E6E'
                onPress={() => this.props.navigation.navigate("QuestionShow", {questID: this.props.navigation.state.params.questID, questionID: item.id})}/>
            </View>
        </View>
        }/>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={() => this.props.navigation.navigate("QuestionNew", {questID: questData[0].id})}>
            <Text style={styles.buttonText}>
              ADD QUESTION
            </Text>
          </Button>
          <Button style={styles.button}
            onPress={() => this.props.navigation.navigate("MainMenu")}>
            <Text style={styles.buttonText}>
              HOME
            </Text>
          </Button>
        </View>
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
    backgroundColor: '#1aa3ff',
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
    paddingTop: 20,
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
    fontSize: 16,
    fontWeight: 'bold',
    width: 300
  },
  listItems: {
    backgroundColor: 'azure',
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#E6E6E6',
    borderWidth: 1,
    paddingLeft: 5,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  subSubtitle: {
    color: 'azure',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  right: {
    paddingRight: 10
  }
});
