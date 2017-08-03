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
      currentUserFormErrors: "",
      newUserFormErrors: "",
       //Data entered from the new quest form
      enterGameKeyErrors: "",
      //Data for the logic to start a new game
      currentGameKey: "",
      currentRoundID: "",
      currentLocationMatch: "",
      previousQuestionID: "",
      currentQuestion: {id: "",
                        questId: "",
                        questionText: "",
                        q_text: "",
                        answer: "",
                        hint: ""},
      currentGuess: "",
      currentGuessStatus: "",
      gameStatus: "",
      editQuestForm: {}, //Data entered from the edit quest form
      playerQuestionInput: {}, //What the user types in when trying to answer a question
      currentGameResult: {id: "",
                          createdBy: "",
                          questTitle: "",
                          playedBy: "",
                          completionScore:"",
                          accuracyScore: "",
                          dateOfPlay:""}, //Data on whether the user got the answer correct for the guess
    }
    this.handleQuestTitleInputForNewQuest = this.handleQuestTitleInputForNewQuest.bind(this)
    this.handleQuestDescriptionInputForNewQuest = this.handleQuestDescriptionInputForNewQuest.bind(this)
    // this.handleNewQuestForm = this.handleNewQuestForm.bind(this)
    this.handleQuestData = this.handleQuestData.bind(this)
    this.handleQuestionNew = this.handleQuestionNew.bind(this)
    this.handleQuestionTextInputForNewQuestion = this.handleQuestionTextInputForNewQuestion.bind(this)
    this.handleQuestionAnswerputForNewQuestion = this.handleQuestionAnswerputForNewQuestion.bind(this)
    this.handleQuestionHintInputForNewQuestion = this.handleQuestionHintInputForNewQuestion.bind(this)
    this.handleQuestionClueTextInputForNewQuestion = this.handleQuestionClueTextInputForNewQuestion.bind(this)
    this.handleUserProfile = this.handleUserProfile.bind(this)
    this.handleUserUsernameInputForLogin = this.handleUserUsernameInputForLogin.bind(this)
    this.handleUserPasswordInputForLogin = this.handleUserPasswordInputForLogin.bind(this)
    this.handleUserSignUp = this.handleUserSignUp.bind(this)
    this.handleUserUsernameInputForSignUp = this.handleUserUsernameInputForSignUp.bind(this)
    this.handleUserEmailInputForSignUp = this.handleUserEmailInputForSignUp.bind(this)
    this.handleUserPasswordInputForSignUp = this.handleUserPasswordInputForSignUp.bind(this)
    this.handleNewGameKeyInput = this.handleNewGameKeyInput.bind(this)
    this.updateLocation = this.updateLocation.bind(this)
    this.handleUserGuess = this.handleUserGuess.bind(this)
    this.getRoundInfo = this.getRoundInfo.bind(this)
    this.updateAppStateForUserAndToken = this.updateAppStateForUserAndToken.bind(this)
    this.setNewGameInfo = this.setNewGameInfo.bind(this)
    this.updateCurrentGuessStatus = this.updateCurrentGuessStatus.bind(this)
    this.updatePreviousQuestionID = this.updatePreviousQuestionID.bind(this)
    this.updateGameStatus = this.updateGameStatus.bind(this)
    this.updateCurrentQuestion = this.updateCurrentQuestion.bind(this)
    this.updateNewQuestFormErrors = this.updateNewQuestFormErrors.bind(this)
    this.resetNewQuestForm = this.resetNewQuestForm.bind(this)
    this.clearLoginInput = this.clearLoginInput.bind(this)
    this.clearUserData = this.clearUserData.bind(this)
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

  updateNewQuestFormErrors(value){
    this.setState({newQuestFormErrors: value})
  }

  resetNewQuestForm(){
    this.setState({newQuestFormQuestTitle: ""})
    this.setState({newQuestFormQuestDescription: ""})
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
    fetch("https://questionamble.herokuapp.com/questions",{
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
      fetch("https://questionamble.herokuapp.com/users/"+this.state.currentUserId+"/my_stats", {
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


    handleUserSignUp() {
      currentContext = this;
      if (this.handleUserUsernameInputForSignUp && this.handleUserPasswordInputForSignUp) {
        fetch('https://questionamble.herokuapp.com/users', {
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
          .then(responseData => {
            this.setState({currentUserId: responseData.userID })
            this.setState({currentUserToken: responseData.auth_token});
        })
      }
    }

    updateAppStateForUserAndToken(userID, userToken){
      this.setState({currentUserId: userID })
      this.setState({currentUserToken: userToken})
    }

    handleNewGameKeyInput(text_value){
      this.setState({currentGameKey: text_value})
    }


  setNewGameInfo(newGameResult, currRoundID , currQuestion){
    this.setState({currentGameResult: newGameResult})
    this.setState({gameStatus: ""})
    this.setState({previousQuestionID: ""})
    this.setState({currentRoundID: currRoundID})
    this.setState({currentQuestion: currQuestion})
  }

  updateLocation(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({currentLat: position.coords.latitude})
      this.setState({currentLng: position.coords.longitude})
    })
  }

  handleUserGuess(text_value){
    this.setState({currentGuess: text_value})
  }

  updateCurrentGuessStatus(currentGuessStat){
    this.setState({currentGuessStatus: currentGuessStat})
  }

  updatePreviousQuestionID(previousQuestionID){
    this.setState({currentGuessStatus: previousQuestionID})
  }

  updateGameStatus(status){
    this.setState({gameStatus: status})
  }

  updateCurrentQuestion(question){
    this.setState({currentQuestion: question})
  }

  getRoundInfo(){
    currentContext = this;
    var path = "https://questionamble.herokuapp.com/rounds/"+currentContext.state.currentRoundID
    fetch(path).then((response => {
      return response.json()})
    ).then(body => {
        currentContext.setState({currentGameResult: body})
    })
    .catch(err => {
      console.log(err)
    })
  }

  clearLoginInput(){
    this.setState({currentUserPassword: ""})
  }

  clearUserData(){
    this.setState({currentUserId: ""})
    this.setState({currentUserUsername: ""})
    this.setState({currentUserToken: ""})
  }
  render() {
    let methods = {
                  currentUserId: this.state.currentUserId,
                  currentUserUsername: this.state.currentUserUsername,
                  currentUserPassword: this.state.currentUserPassword,
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
                  handleUserUsernameInputForLogin: this.handleUserUsernameInputForLogin,
                  handleUserPasswordInputForLogin: this.handleUserPasswordInputForLogin,
                  handleUserSignUp: this.handleUserSignUp,
                  handleUserUsernameInputForSignUp: this.handleUserUsernameInputForSignUp,
                  handleUserEmailInputForSignUp: this.handleUserEmailInputForSignUp,
                  handleUserPasswordInputForSignUp: this.handleUserPasswordInputForSignUp,
                  handleNewGameKeyInput: this.handleNewGameKeyInput,
                  currentQuestion: this.state.currentQuestion,
                  newQuestFormErrors: this.state.newQuestFormErrors,
                  newQuestionFormErrors: this.state.newQuestionFormErrors,
                  newUserFormErrors: this.state.newUserFormErrors,
                  handleQuestionNew: this.handleQuestionNew,
                  handleNewQuestForm: this.handleNewQuestForm,
                  enterGameKeyErrors: this.state.enterGameKeyErrors,
                  requestQuestion: this.requestQuestion,
                  updateLocation: this.updateLocation,
                  currentLocationMatch: this.state.currentLocationMatch,
                  handleUserGuess: this.handleUserGuess,
                  currentGuessStatus: this.state.currentGuessStatus,
                  newQuestionFormText: this.state.newQuestionFormText,
                  newQuestionFormAnswer: this.state.newQuestionFormAnswer,
                  newQuestionFormHint: this.state.newQuestionFormHint,
                  newQuestionFormClue: this.state.newQuestionFormClue,
                  newQuestFormQuestTitle: this.state.newQuestFormQuestTitle,
                  newQuestFormQuestDescription: this.state.newQuestFormQuestDescription,
                  previousQuestionID: this.state.previousQuestionID,
                  gameStatus: this.state.gameStatus,
                  currentGameResult: this.state.currentGameResult,
                  currentGameKey: this.state.currentGameKey,
                  updateAppStateForUserAndToken: this.updateAppStateForUserAndToken,
                  currentGameKey: this.state.currentGameKey,
                  setNewGameInfo: this.setNewGameInfo,
                  currentRoundID: this.state.currentRoundID,
                  updateCurrentGuessStatus: this.updateCurrentGuessStatus,
                  updatePreviousQuestionID: this.updatePreviousQuestionID,
                  updateGameStatus: this.updateGameStatus,
                  updateCurrentQuestion: this.updateCurrentQuestion,
                  currentGuess: this.state.currentGuess,
                  getRoundInfo: this.getRoundInfo,
                  updateNewQuestFormErrors: this.updateNewQuestFormErrors,
                  resetNewQuestForm: this.resetNewQuestForm,
                  clearLoginInput: this.clearLoginInput,
                  clearUserData: this.clearUserData,
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
