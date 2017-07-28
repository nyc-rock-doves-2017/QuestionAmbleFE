import React, { Component } from 'react';
import { AppRegistry,
  Text,
  ScrollView,
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
            <InputField
              ref="username"
              placeholder="Username"/>
            <InputField
              ref="password"
              placeholder="Password"/>
        </Form>
        <Button style={{backgroundColor: 'red'}} textStyle={{fontSize: 18}} onPress={() => this.props.navigation.navigate("MainMenu")}>
          Login
        </Button>
    </ScrollView>
    );
  }
}
