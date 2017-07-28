import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, AppRegistry } from 'react-native';

export default class NavigationMenu extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Menu</Text>

            <TouchableHighlight onPress={() => {
              // the code in the line below will need to be changed
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Play New Game</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {
              // the code in the line below will need to be changed
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>My Quests</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {
              // the code in the line below will need to be changed
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>My Profile</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {
              // the code in the line below will need to be changed
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Log Out</Text>
            </TouchableHighlight>
          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Replace this text with menu icon</Text>
        </TouchableHighlight>

      </View>
    );
  }
}
