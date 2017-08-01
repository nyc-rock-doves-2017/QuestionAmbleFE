/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  AsyncStorage,
  Alert,
  ScrollView
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Login from './components/User/Login.js';
import MainMenu from './components/User/MainMenu.js';
import NewAccount from './components/User/NewAccount.js';
import UserProfile from './components/User/UserProfile.js';
import Welcome from './components/User/Welcome.js';

import QuestionIndex from './components/Questions/QuestionIndex.js';
import QuestionShow from './components/Questions/QuestionShow.js';
import QuestionNew from './components/Questions/QuestionNew.js';
import QuestionEdit from './components/Questions/QuestionEdit.js';

import ClueShow from './components/Clues/ClueShow.js';

import QuestAction from './components/Quests/QuestAction.js';
import QuestCreation from './components/Quests/QuestCreation.js';
import QuestIndex from './components/Quests/QuestIndex.js';
import QuestShow from './components/Quests/QuestShow.js';

import PlayWindow from './components/Game/PlayWindow.js';
import ResultNew from './components/Game/ResultNew.js';
import ResultWin from './components/Game/ResultWin.js';
import ResultLose from './components/Game/ResultLose.js';
import RoundShow from './components/Game/RoundShow.js';
import GameNew from './components/Game/GameNew.js';
import Directory from './components/Directory.js';

const AppDirectory = StackNavigator({
  Directory: {
    screen: Directory,
  },
  Welcome: {
    screen: Welcome,
  },
  Login: {
    screen: Login,
  },
  NewAccount: {
    screen: NewAccount,
  },
  UserProfile: {
    screen: UserProfile,
  },
  MainMenu: {
    screen: MainMenu,
  },
  QuestAction: {
    screen: QuestAction,
  },
  QuestShow: {
    screen: QuestShow,
  },
  QuestCreation: {
    screen: QuestCreation,
  },
  QuestIndex: {
    screen: QuestIndex,
  },
  QuestionIndex: {
    screen: QuestionIndex
  },
  QuestionShow: {
    screen: QuestionShow,
  },
  QuestionNew: {
    screen: QuestionNew,
  },
  QuestionEdit: {
    screen: QuestionEdit,
  },
  ClueShow: {
    screen: ClueShow,
  },
  PlayWindow: {
    screen: PlayWindow,
  },
  ResultNew: {
    screen: ResultNew,
  },
  ResultWin: {
    screen: ResultWin,
  },
  ResultLose: {
    screen: ResultLose,
  },
  RoundShow: {
    screen: RoundShow,
  },
  GameNew: {
    screen: GameNew,
  },
});

export default class QuestionAmbleFE extends Component {
  constructor(props){
    super(props);
    this.state = {
      hasToken: false,
      isLoaded: false,

      playerStatistics: {numGamesStarted: "",
                        numGamesCompleted: "",
                        completenessPercentage: "",
                        indAverageScore: "",
                        gamesPlayed: []},  //Data about the user's game statistics
      //Data about the current user
      roundStatistics: [], //Data about information related to the current round
      questData: [], //Data regarding all the quests that the user ever created along with question and stat info
      nextQuestion: {}, // Data about the next question except for coordinates
      editQuestionForm: {questTitle: ""}, //Data entered from the edit question form

      //Data entered from the new question form
      newQuestionFormText: "",
      newQuestionFormAnswer: "",
      newQuestionFormHint: "",
      newQuestionFormClueText: "",
      newQuestionFormLat: "",
      newQuestionFormLng: "",

      //Data entered from the new quest form
      newQuestFormQuestTitle: "",
      newQuestFormQuestDescription: "",
      newQuestFormQuestTitleGameKey: "",
      newQuestFormErrors: "",

      //Data for login and signup
      currentUserUsername: "",
      currentUserPassword: "",
      newUserUsername: "",
      newUserEmail: "",
      newUserPassword: "",
       //Data entered from the new quest form
      editQuestForm: {}, //Data entered from the edit quest form
      playerQuestionInput: {}, //What the user types in when trying to answer a question
      currentGameResult: {}, //Data on whether the user got the answer correct for the guess

      //Data for the logic to start a new game
      currentGameKey: "",
      currentRound: "",
      currentQuestion: {id: "",
                        questId: "",
                        questionText: "",
                        q_text: "",
                        answer: "",
                        hint: ""},

      editQuestForm: {}, //Data entered from the edit quest form
      playerQuestionInput: {}, //What the user types in when trying to answer a question
      currentGameResult: {}, //Data on whether the user got the answer correct for the guess
    }
    this.handleQuestTitleInputForNewQuest = this.handleQuestTitleInputForNewQuest.bind(this)
    this.handleQuestDescriptionInputForNewQuest = this.handleQuestDescriptionInputForNewQuest.bind(this)
    this.handleNewQuestForm = this.handleNewQuestForm.bind(this)
    this.handleQuestData = this.handleQuestData.bind(this)
    this.handleQuestionNew = this.handleQuestionNew.bind(this)
    this.handleQuestionTextInputForNewQuestion = this.handleQuestionTextInputForNewQuestion.bind(this)
    this.handleQuestionAnswerputForNewQuestion = this.handleQuestionAnswerputForNewQuestion.bind(this)
    this.handleQuestionHintInputForNewQuestion = this.handleQuestionHintInputForNewQuestion.bind(this)
    this.handleQuestionClueTextInputForNewQuestion = this.handleQuestionClueTextInputForNewQuestion.bind(this)
    this.handleUserProfile = this.handleUserProfile.bind(this)
    this.handleUserLogin = this.handleUserLogin.bind(this)
    this.handleUserUsernameInputForLogin = this.handleUserUsernameInputForLogin.bind(this)
    this.handleUserPasswordInputForLogin = this.handleUserPasswordInputForLogin.bind(this)
    this.handleUserSignUp = this.handleUserSignUp.bind(this)
    this.handleUserUsernameInputForSignUp = this.handleUserUsernameInputForSignUp.bind(this)
    this.handleUserEmailInputForSignUp = this.handleUserEmailInputForSignUp.bind(this)
    this.handleUserPasswordInputForSignUp = this.handleUserPasswordInputForSignUp.bind(this)
    this.saveToken = this.saveToken.bind(this)
    this.getToken = this.getToken.bind(this)
    this.handleNewGameKeyInput = this.handleNewGameKeyInput.bind(this)
    this.processGameKey = this.processGameKey.bind(this)
    this.getNextQuestion = this.getNextQuestion.bind(this)
  }
  //To test:
  componentDidMount(){
    AsyncStorage.getItem('auth_token').then((token) => {
     if (token !== null){
       this.setState({
         hasToken: true,
         isLoaded: true
       });
     } else{
       this.setState({
         hasToken: false,
         isLoaded: true
       });
      }
    });
  }
  componentWillMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({newQuestionFormLat: position.coords.latitude})
      this.setState({newQuestionFormLng: position.coords.longitude})
    })
  }

  //User Stuff
  handleUserUsernameInputForLogin(textValue){
    this.setState({currentUserUsername: textValue})
  }
  handleUserPasswordInputForLogin(textValue){
    this.setState({currentUserPassword: textValue})
  }
  handleUserUsernameInputForSignUp(textValue){
    this.setState({newUserUsername: textValue})
  }
  handleUserEmailInputForSignUp(textValue){
    this.setState({newUserEmail: textValue})
  }
  handleUserPasswordInputForSignUp(textValue){
    this.setState({newUserPassword: textValue})
  }

  //Quest
  handleQuestTitleInputForNewQuest(textValue){
    this.setState({newQuestFormQuestTitle: textValue})
  }

  handleQuestDescriptionInputForNewQuest(textValue){
    this.setState({newQuestFormQuestDescription: textValue})
  }

  handleNewQuestForm(event){
    event.preventDefault();
    currentContext = this;
    fetch("https://questionamble.herokuapp.com/quests",{ //Replace link with "/quests/"
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({quest: {title: this.state.newQuestFormQuestTitle,
                            description: this.state.newQuestFormQuestDescription,
                            creator_id: "1"}
                          })
    }).then(
      response => {
        return response.json()})
    .then(body => {
      if (body.hasOwnProperty("error")){
        this.setState({newQuestFormErrors: body.error})
      }else {
        //Ask for guidance on line below
        currentContext.navigator._navigation.navigate("QuestIndex")
      }
    })
    .catch( err => {
      console.log(err)
    })
  }

  handleQuestData(){
    currentContext = this;
    fetch("https://questionamble.herokuapp.com/users/2/my_quests")
    .then(
      response => {
        return response.json()})
    .then(body => {
      this.setState({questData: body})
    })
    .catch( err => {
      console.log(err)
    })
  }
  //Questions
  handleQuestionNew(){
    currentContext = this;
    fetch("https://questionamble.herokuapp.com/questions",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({question: { quest_id: "1",
        question_text: this.state.newQuestionFormText,
        answer: this.state.newQuestionFormAnswer,
        clue_type: "text",
        clue_text: this.state.newQuestionFormClueText,
        hint: this.state.newQuestionFormHint,
        lat: this.state.newQuestionFormLat,
        lng: this.state.newQuestionFormLng,
      }})
    }).then((response => {
      return response.json()})
    ).then(body => {
      if (body.hasOwnProperty("error") === false){
        //Ask for guidance on line below
        currentContext.navigator._navigation.navigate("QuestIndex")
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleQuestionTextInputForNewQuestion(textValue){
    this.setState({newQuestionFormText: textValue})
  }

  handleQuestionAnswerputForNewQuestion(textValue){
    this.setState({newQuestionFormAnswer: textValue})
  }

  handleQuestionHintInputForNewQuestion(textValue){
    this.setState({newQuestionFormHint: textValue})
  }

  handleQuestionClueTextInputForNewQuestion(textValue){
    this.setState({newQuestionFormClue: textValue})
  }


  //Player statistics
  handleUserProfile(){
      currentContext = this;
      fetch("https://questionamble.herokuapp.com/users/2/my_stats")
      .then(
        response => {
          return response.json()})
      .then(body => {
        this.setState({playerStatistics: body})
      })
      .catch( err => {
        console.log(err)
      })
    }

    // User Signup/Login

    async saveToken(value) {
       await AsyncStorage.setItem("auth_token", value)
    }

    async getToken() {
      const value = await AsyncStorage.getItem("auth_token")
      if (value !== null){
        console.log(value)
      }
    }


    handleUserSignUp() {
      currentContext = this;
      if (this.handleUserUsernameInputForSignUp && this.handleUserPasswordInputForSignUp) {
        fetch('https://questionamble.herokuapp.com/users', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user: {
              email: this.state.newUserEmail,
              username: this.state.newUserUsername,
              password: this.state.newUserPassword
            }
          })
        })
          .then(response => {return response.json()})
          .then(responseData => {
            this.saveToken(responseData.auth_token);
        })
      }
    }

    handleUserLogin() {
      if (this.state.username && this.state.password) {
        fetch('https://questionamble.herokuapp.com/users/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user: {
              username: this.state.username,
              password: this.state.password
            }
          })
          .then((response) => response.json())
          .then((responseData) => {
            this.saveItem('auth_token', responseData.auth_token),
            Alert.alert('Login Success!')
          })
        })
      }
    }

    handleNewGameKeyInput(text_value){
      this.setState({currentGameKey: text_value})
    }

    processGameKey(){
      currentContext = this;
      fetch("https://questionamble.herokuapp.com/rounds",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({round: { player_id: 1,
          game_key: this.state.currentGameKey,
        }})
      }).then((response => {
        return response.json()})
      ).then(body => {
        if (body.hasOwnProperty("error") === false){
          //Ask for guidance on line below
          currentContext.setState({currentRound: body.id})
          this.getNextQuestion()
          currentContext.navigator._navigation.navigate("ClueShow")
        }
      })
      .catch(err => {
        console.log(err)
      })
    }

    getNextQuestion(){
      // var newPath = "https://questionamble.herokuapp.com/rounds/"+this.state.currentRound+"/next_question"
      var newPath = "https://questionamble.herokuapp.com/rounds/"+23+"/next_question"
      fetch(newPath)
      .then(
        response => {
          return response.json()})
      .then(body => {
        this.setState({currentQuestion: body})
      })
      .catch( err => {
        console.log(err)
      })
    }
  render() {
    let methods = {
                  handleQuestData: this.handleQuestData,
                  getQuestData: this.getQuestData,
                  handleQuestTitleInputForNewQuest: this.handleQuestTitleInputForNewQuest,
                  handleQuestDescriptionInputForNewQuest: this.handleQuestDescriptionInputForNewQuest,
                  handleNewQuestForm: this.handleNewQuestForm,
                  questData: this.state.questData,
                  handleQuestionNew: this.handleQuestionNew,
                  handleQuestionTextInputForNewQuestion: this.handleQuestionTextInputForNewQuestion,
                  handleQuestionAnswerputForNewQuestion: this.handleQuestionAnswerputForNewQuestion,
                  handleQuestionHintInputForNewQuestion: this.handleQuestionHintInputForNewQuestion,
                  handleQuestionClueTextInputForNewQuestion: this.handleQuestionClueTextInputForNewQuestion,
                  playerStatistics: this.state.playerStatistics,
                  newQuestionFormLat: this.state.newQuestionFormLat,
                  newQuestionFormLng: this.state.newQuestionFormLng,
                  handleUserProfile: this.handleUserProfile,

                  handleUserLogin: this.handleUserLogin,
                  handleUserUsernameInputForLogin: this.handleUserUsernameInputForLogin,
                  handleUserPasswordInputForLogin: this.handleUserPasswordInputForLogin,
                  handleUserSignUp: this.handleUserSignUp,
                  handleUserUsernameInputForSignUp: this.handleUserUsernameInputForSignUp,
                  handleUserEmailInputForSignUp: this.handleUserEmailInputForSignUp,
                  handleUserPasswordInputForSignUp: this.handleUserPasswordInputForSignUp,
                  handleNewGameKeyInput: this.handleNewGameKeyInput,
                  processGameKey: this.processGameKey,
                  getNextQuestion: this.getNextQuestion,
                  currentQuestion: this.currentQuestion,
                  }
    return (
      <AppDirectory screenProps={methods} ref={ nav => {this.navigator = nav;}} />
    );
  }
}

AppRegistry.registerComponent('QuestionAmbleFE', () => QuestionAmbleFE);

//Note:
//Read github and docs for guidance:
// https://reactnavigation.org/docs/navigators/
// https://reactnavigation.org/docs/navigators/navigation-options
// https://github.com/react-community/react-navigation
// https://github.com/react-community/react-navigation/issues/876
