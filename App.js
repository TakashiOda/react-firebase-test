import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View, StatusBar, TextInput } from 'react-native';
import { Container, Content, Header, Form, Input, Button, Label, Icon, List, ListItem } from 'native-base';
// import ListView from "deprecated-react-native-swipeable-listview";
import * as firebase from 'firebase';
// import * as Facebook from 'expo-facebook';
// import { Alert } from 'react-native';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC-eM-1EI_QNNky9J17y_rgjzX_O82nyhE",
  authDomain: "react-firebase-a9be0.firebaseapp.com",
  databaseURL: "https://react-firebase-a9be0.firebaseio.com",
  projectId: "react-firebase-a9be0",
  storageBucket: "react-firebase-a9be0.appspot.com",
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



export default class App extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Text>bbb</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
