import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  SectionList,
  Dimensions
} from 'react-native';
import { Form,
  Separator,
  InputField
} from 'react-native-form-generator';
import Button from 'apsl-react-native-button';
var {height, width} = Dimensions.get('window');
import MapView from 'react-native-maps';

export default class QuestionNew extends Component {
  render() {
    let handleQuestionNew = this.props.screenProps.handleQuestionNew
    let handleQuestionTextInputForNewQuestion = this.props.screenProps.handleQuestionTextInputForNewQuestion
    let handleQuestionAnswerputForNewQuestion = this.props.screenProps.handleQuestionAnswerputForNewQuestion
    let handleQuestionHintInputForNewQuestion = this.props.screenProps.handleQuestionHintInputForNewQuestion
    let handleQuestionClueTextInputForNewQuestion = this.props.screenProps.handleQuestionClueTextInputForNewQuestion
    return (
      <View>
        <Form
          ref="QuestionForm"
          label="New Question">
          <Text>Question:</Text>
          <InputField
          placeholder="Enter your text"
          onChangeText={handleQuestionTextInputForNewQuestion}/>

          <Text>Answer:</Text>
          <InputField
          placeholder="Answer"
          onChangeText={handleQuestionAnswerputForNewQuestion}/>

          <Text>Hint to the answer:</Text>
          <InputField
          placeholder="Hint to the answer"
          onChangeText={handleQuestionHintInputForNewQuestion}/>

          <Text>Clue Text:</Text>
          <InputField
          placeholder="Clue Text"
          onChangeText={handleQuestionClueTextInputForNewQuestion}/>

          <Button
            onPress={() => handleQuestionNew()}
            title="Create Question"/>
        </Form>
        <MapView style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: height,
    width: width,
  },
  button: {
    backgroundColor: '#FB8422',
    borderRadius: 25,
    borderColor: 'azure',
    borderWidth: 2
  },
  wholeScreen: {
    backgroundColor: '#66a3ff',
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
  subtitle: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 10,
  },
  buttonText: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  disclaimerText: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 10,
    paddingLeft: 25,
    paddingRight: 25,
  }
});
