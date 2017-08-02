import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert
 } from 'react-native';
  import Button from 'apsl-react-native-button';
  import { Form,
          Separator,
          InputField
  } from 'react-native-form-generator';

export default class GameNew extends Component {
  static navigationOptions ={
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#C2D834'
    }
  }
  constructor(props){
    super(props);
    this.state = {
      formErrors: "",
    }
    this.processGame = this.processGame.bind(this)
  }

  processGame(){
    currentContext = this;
    fetch("https://questionamble.herokuapp.com/rounds",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({round: { player_id: 2,
        game_key: currentContext.props.screenProps.currentGameKey,
      }})
    }).then((response => {
      return response.json()})
    ).then(body => {
      if (body.hasOwnProperty("error") === false){
        var resetGameResult = {id: "",
                            createdBy: "",
                            questTitle: "",
                            playedBy: "",
                            completionScore:"",
                            accuracyScore: "",
                            dateOfPlay:""}
        var cQuestion = body.first_question
        var cRoundID = body.round_id
        currentContext.props.screenProps.setNewGameInfo(resetGameResult, cRoundID ,cQuestion)
        currentContext.props.navigation.navigate("ClueShow")
      }
      else{
        this.setState({formErrors: body.error})
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  onSubmitForm(e){
    if (this.props.screenProps.currentGameKey === ""){
        Alert.alert(
          'All Fields Are Required',
          'Please complete all fields before submitting.',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
        { cancelable: false }
      )
    }
    else {
      this.processGame();
    }
  }
  render() {
    let { handleNewGameKeyInput } = this.props.screenProps
    return (
      <View keyboardShouldPersistTaps="always"
        style={{
          paddingLeft:10,
          paddingRight:10,
          height:200,
          flex: 3,
          backgroundColor: '#bfd629'
        }}>
        <View style={styles.container}>
          <Text style={styles.title}>Enter the Quest Code to Begin...</Text>
          <Text>{this.state.formErrors}</Text>
          <Form
            ref='LoginForm'
            label="Login">
              <Separator />
              <InputField
                editable={true}
                ref="questCode"
                placeholder="Enter your quest code..."
                returnKeyType='next'
                onChangeText={handleNewGameKeyInput}
                />
            </Form>
          <View style={styles.buttonContainer}>
            <Button style={styles.button}
              onPress={(e) => this.onSubmitForm(e)}>
              <Text style={styles.buttonText}>
                LET'S GO
              </Text>
            </Button>
        </View>
      </View>
    </View>
    );
    }
    }

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#06AED5',
    borderRadius: 25,
    borderColor: 'azure',
    borderWidth: 2
  },
  wholeScreen: {
    backgroundColor: '#C2D834',
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
