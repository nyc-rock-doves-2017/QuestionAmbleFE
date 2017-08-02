import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from 'apsl-react-native-button';
import {Column as Col, Row} from 'react-native-flexbox-grid';


export default class RoundShow extends Component {
  static navigationOptions ={
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#C2D834'
    }
  }
  render() {
    let currentGameResult = this.props.screenProps.currentGameResult
    return (
      <View style={styles.wholeScreen} keyboardShouldPersistTaps="always">
          <View style={styles.container}>
            <View style={styles.iconStyles}>
              <Icon name="line-chart"
                size={50}
                color='#1aa3ff' />
            </View>
          <Text style={styles.title}>Your Results!</Text>
          <Text style={styles.subtitle}>
            {currentGameResult.questTitle}
          </Text>
          <Text style={styles.subtitleTwo}>
            Created By: {currentGameResult.createdBy}
          </Text>
          <View style={styles.grid}>
              <Row style={styles.gridRow}>
                <Col sm={6} md={4} lg={3} style={styles.topLeft}>
                  <Text style={styles.gridTitle}>
                    Completion Score:
                  </Text>
                  <Text style={styles.gridTextTL}>
                    {currentGameResult.completionScore}
                  </Text>
                </Col>
                <Col sm={6} md={4} lg={3} style={styles.topRight}>
                  <Text style={styles.gridTitle}>
                    Accuracy Score:
                  </Text>
                  <Text style={styles.gridTextTR}>
                    {currentGameResult.accuracyScore}
                  </Text>
                </Col>
              </Row>
            </View>
          <View style={styles.buttonContainer}>
            <Button onPress={() => this.props.navigation.navigate("MainMenu")}
              style={styles.button}>
              <Text style={styles.buttonText}>
                HOME
              </Text>
            </Button>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorGreenBackground: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#CE57A6'
  },
  button: {
    backgroundColor: '#1aa3ff',
    borderRadius: 25,
    borderColor: 'azure',
    borderWidth: 2
  },
  wholeScreen: {
    backgroundColor: '#C2D834',
    flex: 3
  },
  container: {
    marginTop: 30,
    paddingLeft: 10,
    paddingRight:10
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
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 10
  },
  subtitle: {
    color: '#1aa3ff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 5
  },
  subtitleTwo: {
    color: '#1aa3ff',
    fontSize: 18,
    textAlign: 'center',
    paddingRight: 25,
    paddingLeft: 25,
    paddingBottom: 20,
    fontStyle: 'italic'
  },
  buttonText: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  questionContainer: {
    backgroundColor: 'azure',
    borderColor: '#E6E6E6',
    borderWidth: 2,
    marginRight: 15,
    marginLeft: 15
  },
  question: {
    color: '#CE57A6',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 30
  },
  form: {
    marginRight: 15,
    marginLeft: 15,
  },
  iconStyles: {
    alignItems: 'center',
    paddingBottom: 5
  },
  gridTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: '#50514F'
  },
  gridTextBR: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#F25F5C'
  },
  gridTextBL: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFB30F'
  },
  gridTextTL: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFB30F'
  },
  gridTextTR: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#CE57A6'
  },
  topLeft: {
    backgroundColor: 'azure',
    paddingBottom: 20,
    paddingTop: 10,
    borderColor: '#E6E6E6',
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 1,
    borderBottomWidth: 1
  },
  topRight: {
    backgroundColor: 'azure',
    paddingBottom: 20,
    paddingTop: 10,
    borderColor: '#E6E6E6',
    borderLeftWidth: 1,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 1
  },
  bottomRight: {
    backgroundColor: 'azure',
    paddingBottom: 20,
    paddingTop: 10,
    borderColor: '#E6E6E6',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 2,
    borderBottomWidth: 2
  },
  bottomLeft: {
    backgroundColor: 'azure',
    paddingBottom: 20,
    paddingTop: 10,
    borderColor: '#E6E6E6',
    borderLeftWidth: 2,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 2
  },
  grid: {
    paddingTop: 10,
    paddingBottom: 10
  },
});
