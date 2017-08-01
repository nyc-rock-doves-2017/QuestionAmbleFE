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
          <View style={styles.buttonContainer}>
            <Button style={styles.button} onPress={() => this.props.navigation.navigate("QuestionIndex", {questID: data[0].id})}>
              <Text style={styles.buttonText}>
                VIEW QUESTIONS
              </Text>
            </Button>
          </View>
          <View style={styles.grid}>
              <Row style={styles.gridRow}>
                <Col sm={6} md={4} lg={3} style={styles.topLeft}>
                  <Text style={styles.gridTitle}>
                    Times Played
                  </Text>
                  <Text style={styles.gridText}>
                    {data[0].timesPlayed}
                  </Text>
                </Col>
                <Col sm={6} md={4} lg={3} style={styles.topRight}>
                  <Text style={styles.gridTitle}>
                    Times Completed
                  </Text>
                  <Text style={styles.gridText}>
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
                  <Text style={styles.gridText}>
                    {data[0].completionScore}
                  </Text>
                </Col>
                <Col sm={6} md={4} lg={3}
                  style={styles.bottomRight}>
                  <Text style={styles.gridTitle}>
                    Accuracy Score
                  </Text>
                  <Text style={styles.gridText}>
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
    backgroundColor: '#06AED5',
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
    backgroundColor: '#C2D834',
    paddingBottom: 20,
    paddingTop: 10,
    borderColor: 'azure',
    borderWidth: 2
  },
  topRight: {
    backgroundColor: '#FFB30F',
    paddingBottom: 20,
    paddingTop: 10,
    borderColor: 'azure',
    borderWidth: 2
  },
  bottomRight: {
    backgroundColor: '#FD151B',
    paddingBottom: 20,
    paddingTop: 10,
    borderColor: 'azure',
    borderWidth: 2,
  },
  bottomLeft: {
    backgroundColor: '#EF39EC',
    paddingBottom: 20,
    paddingTop: 10,
    borderColor: 'azure',
    borderWidth: 2
  }
});
