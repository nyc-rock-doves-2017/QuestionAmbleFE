import React, { Component } from 'react';
import { AppRegistry,
  Text,
  View,
  FlatList,
  ScrollView,
  StyleSheet
} from 'react-native';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import Button from 'apsl-react-native-button';

export default class UserProfile extends Component {
  static navigationOptions ={
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#1aa3ff'
    }
  }
  componentWillMount(){
    this.props.screenProps.handleUserProfile();
  }
  render(){
    let playerData = this.props.screenProps.playerStatistics
    return(
      <ScrollView style={styles.wholeScreen}>
        <View style={styles.container}>
        <Text style={styles.title}>
          My Profile
        </Text>
        <View style={styles.grid}>
            <Row style={styles.gridRow}>
              <Col sm={6} md={4} lg={3} style={styles.topLeft}>
                <Text style={styles.gridTitle}>
                  Times Played
                </Text>
                <Text style={styles.gridTextTL}>
                  {playerData.numGamesStarted}
                </Text>
              </Col>
              <Col sm={6} md={4} lg={3} style={styles.topRight}>
                <Text style={styles.gridTitle}>
                  Times Completed
                </Text>
                <Text style={styles.gridTextTR}>
                  {playerData.numGamesCompleted}
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
                  {playerData.completenessPercentage}
                </Text>
              </Col>
              <Col sm={6} md={4} lg={3}
                style={styles.bottomRight}>
                <Text style={styles.gridTitle}>
                  Accuracy Score
                </Text>
                <Text style={styles.gridTextBR}>
                  {playerData.indAverageScore}
                </Text>
              </Col>
            </Row>
        </View>
        <Text style={styles.title}>Quest History</Text>
        <FlatList
          data={playerData.gamesPlayed}
          renderItem={({item}) =>
            <View style={styles.listItems}>
            <Text style={styles.listText} key={item.id}>
              <Text style={styles.listTitleItem}>
                {item.questTitle}
              </Text>
              {"\n"}
              <Text style={styles.listSubTitleItem}>
                Created by:
              </Text> {item.createdBy}
                {"\n"}
              <Text style={styles.listSubTitleItem}>
                Played on:
              </Text> {item.dateOfPlay}
              {"\n"}
              <Text style={styles.listSubTitleItem}>
                Score:
              </Text> {item.accuracyScore}
              {"\n"}
            </Text>
          </View>
          }
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => this.props.navigation.navigate("MainMenu")}
          style={styles.button}>
          <Text style={styles.buttonText}>
            HOME
          </Text>
        </Button>
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
    paddingTop: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 10
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
  listTitleItem: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 5,
    color: '#CE57A6'
  },
  listSubTitleItem: {
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  listText: {
    color: '#6F706F',
    paddingLeft: 5
  },
  listItems: {
    backgroundColor: 'azure',
    paddingTop: 7,
    borderColor: '#E6E6E6',
    borderWidth: 1,
    paddingLeft: 5,
  },
});
