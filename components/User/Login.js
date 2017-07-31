import React, { Component } from 'react';
import { AppRegistry,
  Text,
  TextInput,
  ScrollView,
  AsyncStorage,
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

export default class Login extends Component {
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
      <ScrollView keyboardShouldPersistTaps="always" style={{paddingLeft:10, paddingRight:10, height:200, flex: 3, backgroundColor: '#66a3ff'}}>
        <Text style={styles.title}>Login</Text>
        <Form
          ref='LoginForm'
          onFocus={this.handleFormFocus.bind(this)}
          onChange={this.handleFormChange.bind(this)}
          label="Login">
            <Separator />
            <TextInput
              editable={true}
              onChangeText={(username) => this.setState({username})}
              ref="username"
              placeholder="Username"
              returnKeyType='next'
              value={this.state.username}/>
            <TextInput
              editable={true}
              onChangeText={(password) => this.setState({password})}
              ref="password"
              placeholder="Password"
              returnKeyType='next'
              secureTextEntry={true}
              value={this.state.password}/>
        </Form>
        <Button style={{backgroundColor: 'red'}} textStyle={{fontSize: 18}} onPress={() => this.props.navigation.navigate("MainMenu")}>
          Login
        </Button>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
