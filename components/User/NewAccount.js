import React, { Component } from 'react';
import { AppRegistry,
  Text,
  Alert,
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import Button from 'apsl-react-native-button';
import { Form,
        Separator,
        InputField,
        LinkField,
        SwitchField,
        PickerField,
        DatePicker,
        TimePickerField
} from 'react-native-form-generator';

export default class NewAccount extends Component {
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

  render(){
    return(
      <ScrollView keyboardShouldPersistTaps="always" style={{paddingLeft:10,paddingRight:10, height:200, flex: 3, backgroundColor: '#06AED5'}}>
        <View style={styles.container}>
          <Text style={styles.title}>Create Account</Text>
          <Form
            ref='NewAccountForm'
            label="Create a New Account">
              <Separator />
              <InputField
                onChangeText={this.props.screenProps.handleUserEmailInputForSignUp}
                ref="email"
                placeholder="Email"/>
              <InputField
                onChangeText={this.props.screenProps.handleUserUsernameInputForSignUp}
                ref="username"
                placeholder="Username"/>
              <InputField
                onChangeText={this.props.screenProps.handleUserPasswordInputForSignUp}
                ref="password"
                placeholder="Password"
                secureTextEntry={true}/>
          </Form>
          <View style={styles.buttonContainer}>
            <Button style={styles.button} onPress={this.props.screenProps.handleUserSignUp}>
              <Text style={styles.buttonText}>
                CREATE ACCOUNT
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
    backgroundColor: '#06AED5',
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
  }
});
