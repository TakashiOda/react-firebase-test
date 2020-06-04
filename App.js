import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ENV from './env.json';

// eslint-disable-next-line
require("firebase/firestore");

const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    Home: MemoListScreen,
    Detail: MemoDetailScreen,
    MemoCreate: MemoCreateScreen,
    Edit: MemoEditScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2C4956',
      },
      headerBackTitle: null,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default class App extends React.Component {
  render() {
    const Layout = createAppContainer(Stack);
    return (
      <Layout />
    );
  }
}
