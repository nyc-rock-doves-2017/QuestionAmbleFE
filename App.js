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
      currentLat: "",
      currentLng: "",
      newQuestionFormErrors: "",

      //Data entered from the new quest form
      newQuestFormQuestTitle: "",
      newQuestFormQuestDescription: "",
      newQuestFormQuestTitleGameKey: "",
      newQuestFormErrors: "",

      //Data for login and signup
      currentUserToken: "",
      currentUserId: "",
      currentUserUsername: "",
      currentUserPassword: "",
      newUserUsername: "",
      newUserEmail: "",
      newUserPassword: "",
       //Data entered from the new quest form
      currentGameResult: {}, //Data on whether the user got the answer correct for the guess

      enterGameKeyErrors: "",
      //Data for the logic to start a new game
      currentGameKey: "",
      currentRoundID: "",
      currentLocationMatch: "",
      currentQuestion: {id: "",
                        questId: "",
                        questionText: "",
                        q_text: "",
                        answer: "",
                        hint: ""},
      currentGuess: "",
      currentGuessStatus: "",

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
    this.updateLocation = this.updateLocation.bind(this)
    this.checkLocation = this.checkLocation.bind(this)
    this.handleUserGuess = this.handleUserGuess.bind(this)
    this.processGuess = this.processGuess.bind(this)
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

  handleNewQuestForm(){
    currentContext = this;
    fetch("http://questionamble.herokuapp.com/quests",{ //Replace link with "/quests/"
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({quest: {title: currentContext.state.newQuestFormQuestTitle,
                            description: currentContext.state.newQuestFormQuestDescription,
                            creator_id: "2"}
                          })
    }).then(
      response => {
        return response.json()})
    .then(body => {
      if (body.hasOwnProperty("error")){
        currentContext.setState({newQuestFormErrors: body.error})
      }
    })
    .catch( err => {
      console.log(err)
    })
  }

  handleQuestData(){
    currentContext = this;
    fetch("https://questionamble.herokuapp.com/users/"+this.state.currentUserId+"/my_quests")
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
    fetch("http://questionamble.herokuapp.com/questions",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({question: { quest_id: "2",
        question_text: this.state.newQuestionFormText,
        answer: this.state.newQuestionFormAnswer,
        clue_type: "text",
        clue_text: this.state.newQuestionFormClueText,
        hint: this.state.newQuestionFormHint,
        lat: this.state.currentLat,
        lng: this.state.currentLng,
      }})
    }).then((response => {
      return response.json()})
    ).then(body => {
      if (body.hasOwnProperty("error")){
        this.setState({newQuestionFormErrors: body.error})
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
      debugger
      fetch("http://questionamble.herokuapp.com/users/"+this.state.currentUserId+"/my_stats", {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': this.state.currentUserToken
        }
      })
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

  //User Signup/Login

    async saveToken(value) {
       await AsyncStorage.setItem("auth_token", value)
    }

    async getToken() {
      const value = await AsyncStorage.getItem("auth_token")
      if (value !== null){
        return value
      }
    }


    handleUserSignUp() {
      currentContext = this;
      if (this.handleUserUsernameInputForSignUp && this.handleUserPasswordInputForSignUp) {
        fetch('http://questionamble.herokuapp.com/users', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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

            this.setState({currentUserId: responseData.userID })
            this.setState({currentUserToken: responseData.auth_token});

        })
      }
    }

    handleUserLogin() {
      currentContext = this;
      if (this.handleUserUsernameInputForLogin && this.handleUserPasswordInputForLogin) {

        fetch('http://questionamble.herokuapp.com/users/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.state.currentUserUsername,
            password: this.state.currentUserPassword
          })
        })
          .then(response => {return response.json()})
          .then(responseData => {

            this.setState({currentUserId: responseData.userID })
            this.setState({currentUserToken: responseData.auth_token})
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
        body: JSON.stringify({round: { player_id: 2, //this.state.currentUserId
          game_key: currentContext.state.currentGameKey,
        }})
      }).then((response => {
        return response.json()})
      ).then(body => {
        if (body.hasOwnProperty("error") === false){
          currentContext.setState({currentRoundID: body.round_id, currentQuestion: body.first_question})
        }
      })
      .catch(err => {
        console.log(err)
      })
    }

    getNextQuestion(){
      var newPath = "https://questionamble.herokuapp.com/rounds/"+this.state.currentRound+"/next_question"

      currentContext = this;
      var currentRoundID = currentContext.state.currentRoundID

      fetch(newPath)
      .then(
        response => {
          return response.json()})
      .then(body => {
        debugger
        currentContext.setState({currentQuestion: body})
      })
      .catch( err => {
        console.log(err)
      })
    }

  updateLocation(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({currentLat: position.coords.latitude})
      this.setState({currentLng: position.coords.longitude})
    })
  }


  checkLocation(){
    currentContext = this;
    var roundID = this.state.currentRoundID
    var currentQuestionID = this.state.currentQuestion.id
    var path = "https://questionamble.herokuapp.com/rounds/"+roundID+"/compare_location?player_lat="+currentContext.state.currentLat+"&player_lng="+currentContext.state.currentLng+"&cur_question_id="+currentQuestionID
    fetch(path,{
      method: "GET",
      headers: {"Content-Type": "application/json"}
    }).then((response => {
      return response.json()})
    ).then(body => {
      if (body.clue === "found"){
        //Ask for guidance on line below
        currentContext.setState({currentLocationMatch: body.clue})
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleUserGuess(text_value){
    this.setState({currentGuess: text_value})
  }

  processGuess(){
    currentContext = this;
    fetch("https://questionamble.herokuapp.com/results",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ player_id: 2,
        question_id: currentContext.state.currentQuestion.id,
        round_id: currentContext.state.currentRoundID,
        user_guess: currentContext.state.currentGuess,
      })
    }).then((response => {
      return response.json()})
    ).then(body => {
      if (body.result === "correct"){
        //Ask for guidance on line below
        currentContext.setState({currentGuessStatus: "correct"})
      }
    })
    .catch(err => {
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
                  currentLat: this.state.currentLat,
                  currentLng: this.state.currentLng,
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
                  currentQuestion: this.state.currentQuestion,
                  checkLocation: this.checkLocation,
                  newQuestFormErrors: this.state.newQuestFormErrors,
                  newQuestionFormErrors: this.state.newQuestionFormErrors,
                  handleQuestionNew: this.handleQuestionNew,
                  handleNewQuestForm: this.handleNewQuestForm,
                  enterGameKeyErrors: this.state.enterGameKeyErrors,
                  requestQuestion: this.requestQuestion,
                  updateLocation: this.updateLocation,
                  currentLocationMatch: this.state.currentLocationMatch,
                  checkLocation: this.checkLocation,
                  handleUserGuess: this.handleUserGuess,
                  processGuess: this.processGuess,
                  currentGuessStatus: this.state.currentGuessStatus,
                  newQuestionFormText: this.state.newQuestionFormText,
                  newQuestionFormAnswer: this.state.newQuestionFormAnswer,
                  newQuestionFormHint: this.state.newQuestionFormHint,
                  newQuestionFormClue: this.state.newQuestionFormClue,
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
