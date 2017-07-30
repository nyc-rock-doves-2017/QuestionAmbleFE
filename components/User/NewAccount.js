import React, { Component } from 'react';
import { AppRegistry,
  Text,
  Alert,
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
      <ScrollView keyboardShouldPersistTaps="always" style={{paddingLeft:10,paddingRight:10, height:200}}>
        <Text>Create Account</Text>
        <Form
          ref='NewAccountForm'
          onFocus={this.handleFormFocus.bind(this)}
          onChange={this.handleFormChange.bind(this)}
          label="Create a New Account">
            <Separator />
            <TextInput
              editable={true}
              onChangeText={(email) => this.setState({email})}
              ref="email"
              placeholder="Email"
              returnKeyType='next'
              value={this.state.email}
            />
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
          Create Account
        </Button>
    </ScrollView>
    );
  }
}
