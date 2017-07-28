import React, { Component } from 'react';
import { AppRegistry,
  Text,
  View
} from 'react-native';
import NavigationTitle from './NavigationTitle.js';
import NavigationMenu from './NavigationMenu.js';

export default class NavigationBar extends Component {
  render(){
    return(
      <View style={{marginTop: 22}}>
        <NavigationTitle />
        <NavigationMenu />
      </View>
    );
  }
}
