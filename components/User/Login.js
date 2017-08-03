import React, { Component } from 'react';
import { AppRegistry,
  Text,
  View,
  Alert,
  StyleSheet
} from 'react-native';
import Button from 'apsl-react-native-button';
import { Form,
        Separator,
        InputField
} from 'react-native-form-generator';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

export default class Login extends Component {
  static navigationOptions ={
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#1aa3ff'
    }
  }
  constructor(props){
    super(props);
    this.state = {
      logErrors: "",
      formData:{}
    }
  }

  handleFormChange(formData){
    this.setState({formData:formData})
    this.props.onFormChange && this.props.onFormChange(formData);
  }

  processLogAgain(){
    componentContext = this;
    fetch('https://questionamble.herokuapp.com/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: componentContext.props.screenProps.currentUserUsername,
        password: componentContext.props.screenProps.currentUserPassword
      })
    }).then(response => {
      return response.json()})
    .then(responseData => {
      if (responseData.hasOwnProperty("error")){
          componentContext.setState({logErrors: "An error occurred. Please check all fields before submitting!"})
        }
      else{
          componentContext.props.screenProps.updateAppStateForUserAndToken(responseData.userID, responseData.auth_token)
          componentContext.props.screenProps.clearLoginInput()
          componentContext.props.navigation.navigate("MainMenu")
        }
    }).catch(error => {
      console.log("error found!")
    })
  }



  onSubmitForm(e){
    if (this.props.screenProps.currentUserUsername === "" ||
        this.props.screenProps.currentUserPassword === ""){
        Alert.alert(
          'All Fields Are Required',
          'Please complete all fields before submitting',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
        { cancelable: false }
      )
    }
    else {
      this.processLogAgain();
    }
  }

  render(){
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View keyboardShouldPersistTaps="always" style={{paddingLeft:10, paddingRight:10, height:200, flex: 3, backgroundColor: '#1aa3ff'}}>
          <View style={styles.container}>
            <Text style={styles.errorBlueBackground}>
              {this.state.logErrors}
            </Text>
            <View style={styles.iconContainer}>
              <Icon name="user-circle" size={50} color='azure' />
            </View>
            <Text style={styles.title}>Login</Text>
            <Form
              ref='LoginForm'
              label="Login">
                <Separator />
                <InputField
                  onChangeText={this.props.screenProps.handleUserUsernameInputForLogin}
                  ref="username"
                  autoCapitalize="none"
                  placeholder="Username"/>
                <InputField
                  onChangeText={this.props.screenProps.handleUserPasswordInputForLogin}
                  ref="password"
                  autoCapitalize="none"
                  placeholder="Password"
                  secureTextEntry={true}/>
              </Form>
            <View style={styles.buttonContainer}>
              <Button style={styles.button} onPress={(e) => this.onSubmitForm(e)}>
                <Text style={styles.buttonText}>
                  LOGIN
                </Text>
              </Button>
              <Button style={styles.button}
                onPress={() => this.props.navigation.navigate("Welcome")}>
                <Text style={styles.buttonText}>
                  RETURN
                </Text>
              </Button>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  errorBlueBackground: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#C2D834'
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 5
  },
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
