import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ClueShow extends Component {
  static navigationOptions ={
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#C2D834'
    }
  }
  constructor(props){
    super(props);
    this.state = {
      clue: "",
      location: "",
      formErrors: "",
    }
    this.props.screenProps.updateLocation();
    this.checkQuestion = this.checkQuestion.bind(this)
  }

  checkQuestion(){
    currentContext = this;
    var roundID = currentContext.props.screenProps.currentRoundID
    var currentQuestionID = currentContext.props.screenProps.currentQuestion.id
    var lat = currentContext.props.screenProps.currentLat
    var lng = currentContext.props.screenProps.currentLng
    var path = "https://questionamble.herokuapp.com/rounds/"+roundID+"/compare_location?player_lat="+lat+"&player_lng="+lng+"&cur_question_id="+currentQuestionID
    fetch(path,{
      method: "GET",
      headers: {"Content-Type": "application/json"}
    }).then((response => {
      return response.json()})
    ).then(body => {
      if (body.clue === "found"){
        //Ask for guidance on line below
        this.setState({location: "found"})
        this.props.navigation.navigate("PlayWindow")
      }
      else{
        this.setState({formErrors: "Sorry, try another location!"})
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
  let {currentQuestion} = this.props.screenProps
    return (
      <View style={{paddingLeft:10, paddingRight:10, height:200, flex: 3, backgroundColor: '#C2D834', flexDirection: 'column', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.errorGreenBackground}>
              {this.state.formErrors}
            </Text>
            <View style={styles.iconContainer}>
              <Icon name="search" size={50} color='#1aa3ff' />
            </View>
            <Text style={styles.title}>
              Here's a clue to find your question...
            </Text>
            <Text style={styles.subtitle}>
              Where could it be?
            </Text>
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.question}>{currentQuestion.clue_text}</Text>
          </View>
          <View>
            <View style={styles.buttonContainer}>
              <Button style={styles.button}
                onPress={this.checkQuestion}>
                <Text style={styles.buttonText}>
                  CHECK LOCATION
                </Text>
              </Button>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  },
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
    backgroundColor: '#C2D834'
  },
  buttonContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  title: {
    marginTop: 10,
    color: 'azure',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
  subtitle: {
    color: '#1aa3ff',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 10,
    fontWeight: 'bold',
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
  }
});
