import React from 'react';
import Expo from 'expo';
import { StyleSheet, View } from 'react-native';
// import { Container } from 'native-base';
// import ListView from "deprecated-react-native-swipeable-listview";
import * as firebase from 'firebase';
// import * as Facebook from 'expo-facebook';
// import { Alert } from 'react-native';
import Appbar from './src/components/Appbar';
//import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';


// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyC-eM-1EI_QNNky9J17y_rgjzX_O82nyhE',
  authDomain: 'react-firebase-a9be0.firebaseapp.com',
  databaseURL: 'https://react-firebase-a9be0.firebaseio.com',
  projectId: 'react-firebase-a9be0',
  storageBucket: 'react-firebase-a9be0.appspot.com',
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <MemoDetailScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 78,
  },
});
