import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  SectionList,
  Dimensions,
  ScrollView
} from 'react-native';
  import Button from 'apsl-react-native-button';
  var {height, width} = Dimensions.get('window');
  import MapView from 'react-native-maps';

export default class QuestionShow extends Component {
  static navigationOptions ={
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#1aa3ff'
    }
  }
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     formData: {}
  //   }
  // }



  render() {
    let questData = this.props.screenProps.questData.filter( (data) => data.id === this.props.navigation.state.params.questID)
    let question = questData[0].questions.filter( (question) => question.id === this.props.navigation.state.params.questionID)
    let currentLat = this.props.screenProps.currentLat
    let currentLng = this.props.screenProps.currentLng
    return (
      <ScrollView keyboardShouldPersistTaps="always" style={{height:200, flex: 3, backgroundColor: '#1aa3ff'}}>
        <View style={styles.container}>
          <Text style={styles.subtitle}>
            View Question from...
          </Text>
          <Text style={styles.title}>
          {questData[0].title}
          </Text>
        <Text style={styles.listItems}>
          <Text style={styles.listText}>
            Question:
          </Text>
          {"\n"}
          {question[0].questionText}
        </Text>
        <Text style={styles.listItems}>
          <Text style={styles.listText}>
            Answer:
          </Text>
          {"\n"}
          {question[0].answer}
        </Text>
        <Text style={styles.listItems}>
          <Text style={styles.listText}>
            Hint:
          </Text>
          {"\n"}
          {question[0].hint}
        </Text>
        <Text style={styles.listItems}>
          <Text style={styles.listText}>
            Location Clue:
          </Text>
          {"\n"}
          {question[0].clueText}
        </Text>
      </View>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            region={{
              latitude: Number(currentLat),
              longitude: Number(currentLng),
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421,
            }}>
                <MapView.Marker
                  coordinate={{latitude: Number(currentLat), longitude: Number(currentLng)}}
                />
            </MapView>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    height: 300,
    width: width,
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
  mapcContainer: {
    marginTop: 20,
  },
  container: {
    marginTop: 20,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 20
  },
  buttonContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 15
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
    textAlign: 'center',
  },
  explanationText: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  explanationTextTwo: {
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  listItems: {
    backgroundColor: 'azure',
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#E6E6E6',
    borderWidth: 1,
    paddingLeft: 5,
    color: '#6F706F',
    height: 65
  },
  listText: {
    fontWeight: 'bold',
  },
});
