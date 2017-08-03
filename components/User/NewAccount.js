import React, { Component } from 'react';
import { AppRegistry,
  Text,
  Alert,
  View,
  StyleSheet
} from 'react-native';
import Button from 'apsl-react-native-button';
import { Form,
        Separator,
        InputField
} from 'react-native-form-generator';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

export default class NewAccount extends Component {
  static navigationOptions ={
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#1aa3ff'
    }
  }
  constructor(props){
    super(props);
    this.state = {
      formData:{}
    }
  }

  handleFormChange(formData){
    this.setState({formData:formData})
    this.props.onFormChange && this.props.onFormChange(formData);
  }

  handleFormFocus(e, component){

  }

  processNewUser(){
    this.props.screenProps.handleUserSignUp()
    if (this.props.screenProps.newUserFormErrors === ""){
      this.props.navigation.navigate("MainMenu")
    }
    else{
      this.setState({formErrors: "An error has occurred. Please check all fields before submitting."})
    }
  }

  onSubmitForm(e){
    if (this.props.screenProps.newUserUsername === "" ||
        this.props.screenProps.newUserEmail === "" ||
        this.props.screenProps.newUserPassword === "" ){
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
      this.processNewUser();
      }
    }

  render(){
    let handleUserSignUp = this.props.screenProps.handleUserSignUp
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View keyboardShouldPersistTaps="always" style={{paddingLeft:10,paddingRight:10, height:200, flex: 3, backgroundColor: '#1aa3ff'}}>
          <View style={styles.container}>
            <View style={styles.iconContainer}>
              <Icon name="user-circle" size={50} color='azure' />
            </View>
            <Text style={styles.title}>Create Account</Text>
            <Form
              ref='NewAccountForm'
              label="Create a New Account">
                <Separator />
                <InputField
                  onChangeText={this.props.screenProps.handleUserEmailInputForSignUp}
                  ref="email"
                  autoCapitalize="none"
                  placeholder="Email"/>
                <InputField
                  onChangeText={this.props.screenProps.handleUserUsernameInputForSignUp}
                  ref="username"
                  autoCapitalize="none"
                  placeholder="Username"/>
                <InputField
                  onChangeText={this.props.screenProps.handleUserPasswordInputForSignUp}
                  ref="password"
                  autoCapitalize="none"
                  placeholder="Password"
                  secureTextEntry={true}/>
              </Form>
              <Text style={styles.disclaimerText}>
                *This app uses geolocation services.
              </Text>
            <View style={styles.buttonContainer}>
              <Button style={styles.button}
              onPress={(e) => this.onSubmitForm(e)}>
                <Text style={styles.buttonText}>
                  CREATE ACCOUNT
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
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
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
    textAlign: 'center'
  },
  disclaimerText: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 10,
    paddingLeft: 25,
    paddingRight: 25,
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
