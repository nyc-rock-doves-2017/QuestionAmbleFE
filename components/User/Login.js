import React, { Component } from 'react';
import { AppRegistry,
  Text,
  TextInput,
  ScrollView,
  AsyncStorage,
  View
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

  async saveItem(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch(error) {
      console.error('AsyncStorage error: ' + error.message);
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
      <ScrollView keyboardShouldPersistTaps="always" style={{paddingLeft:10,paddingRight:10, height:200}}>
        <Text>Login</Text>
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
              value={this.state.username}
            />
            <TextInput
              editable={true}
              onChangeText={(password) => this.setState({password})}
              ref="password"
              placeholder="Password"
              returnKeyType='next'
              secureTextEntry={true}
              value={this.state.password}
            />
        </Form>
        <Button style={{backgroundColor: 'red'}} textStyle={{fontSize: 18}} onPress={() => this.props.navigation.navigate("MainMenu")}>
          Login
        </Button>
    </ScrollView>
    );
  }
}
