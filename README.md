# QuestionAmble (Front-end)

QuestionAmble is a React Native application that allows users to create quests with location based questions. Players who embark on a quest need to locate where the question is based and try to guess the answer. The game is over when the player has answered all the questions for the quest. When this happens, the player is shown results. The focus of this app is knowledge by exploring!

This is the front-end component of our project. Although we had one week to design and program the initial version that was demoed, there may be updates from time to time. This is not a commercial application.

### Table of Contents
- Team Members
- Program Structure
- Live Demo
- Resources

#### Team Members
* Wan Tsui - *[GitHub: wantsui](https://github.com/wantsui)*
* Kelsey Malone - *[GitHub: kqm001](https://github.com/kqm001)*
* Kevin Cross - *[GitHub: Kevinhcross96](https://github.com/Kevinhcross96)*
* Rahat Alam - *[GitHub: rahat64](https://github.com/rahat64)*

#### Program Structure
![tech_used](QuestionAmble_tech_used.jpg)

1. Since QuestionAmble is a game that requires players to be mobile, the application itself needed to be mobile. React Native was chosen so that our team could create a mobile application using JavaScript that would eventually be compatible with both Android and iOS.
2. An API that React Native apps have access to is the Geolocation API. The original vision for the application involved AR, but due to time constraints, geolocation was used instead. See the resources below to learn more about geolocation and React Native!
3. To show the quest creators a visual representation of their location, Airbnb's React Native Maps was used.
4. To store and extract information, we used Rails with Postgres as the back-end. By treating Rails as an API, the React Native application just needed to be concerned with working with the data provided.


#### Live Demo

*Link coming soon!*

#### Resources
1. React Native
  - https://facebook.github.io/react-native/
2. MDN web docs - "Geolocation"
  - https://developer.mozilla.org/en-US/docs/Web/API/Geolocation
3. MDN web docs - "Using geolocation"
  - https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
4. React Native - "Geolocation"
  - https://facebook.github.io/react-native/docs/geolocation.html
4. Airbnb - "React Native Maps"
  - https://github.com/airbnb/react-native-maps


*This README is still in progress. Check back soon for more updates!*
