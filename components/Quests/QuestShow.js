import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView
} from 'react-native';
import Button from 'apsl-react-native-button';
import {Column as Col, Row} from 'react-native-flexbox-grid';


export default class QuestShow extends Component {
  static navigationOptions ={
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#1aa3ff'
    }
  }
  render() {
    let data = this.props.screenProps.questData.filter( (data) => data.id === this.props.navigation.state.params.questId)

    return (
      <ScrollView style={styles.wholeScreen}>
        <View style={styles.container}>
          <Text style={styles.title}>
            {data[0].title}
          </Text>
          <Text style={styles.subtitle}>
            {data[0].description}
          </Text>
          <Text style={styles.subSubtitle}>
            Quest Code: {data[0].gameKey}
          </Text>
          <View style={styles.grid}>
              <Row style={styles.gridRow}>
                <Col sm={6} md={4} lg={3} style={styles.topLeft}>
                  <Text style={styles.gridTitle}>
                    Times Played
                  </Text>
                  <Text style={styles.gridTextTL}>
                    {data[0].timesPlayed}
                  </Text>
                </Col>
                <Col sm={6} md={4} lg={3} style={styles.topRight}>
                  <Text style={styles.gridTitle}>
                    Times Completed
                  </Text>
                  <Text style={styles.gridTextTR}>
                    {data[0].timesCompleted}
                  </Text>
                </Col>
              </Row>
              <Row>
                <Col sm={6} md={4} lg={3}
                  style={styles.bottomLeft}>
                  <Text style={styles.gridTitle}>
                    Completion Score
                  </Text>
                  <Text style={styles.gridTextBL}>
                    {data[0].completionScore}
                  </Text>
                </Col>
                <Col sm={6} md={4} lg={3}
                  style={styles.bottomRight}>
                  <Text style={styles.gridTitle}>
                    Accuracy Score
                  </Text>
                  <Text style={styles.gridTextBR}>
                    {data[0].avgAccuracyScore}
                  </Text>
                </Col>
              </Row>
          </View>
          <Text style={styles.subtitle}>
            Played By:
          </Text>
          <Text style={styles.subSubtitle}>
            {data[0].playedBy}
          </Text>
          <View style={styles.buttonContainer}>
            <Button style={styles.button} onPress={() => this.props.navigation.navigate("QuestionIndex", {questID: data[0].id})}>
              <Text style={styles.buttonText}>
                VIEW QUESTIONS
              </Text>
            </Button>
            <Button style={styles.button} onPress={() => this.props.navigation.navigate("MainMenu")}>
              <Text style={styles.buttonText}>
                HOME
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    paddingTop: 10,
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
    marginTop: 20,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5
  },
  buttonContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
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
  subSubtitle: {
    color: 'azure',
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
  gridTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: '#50514F'
  },
  gridText: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#50514F'
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
    color: '#C2D834'
  },
  gridTextTR: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#CE57A6'
  },
});
