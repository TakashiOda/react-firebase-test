import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from 'native-base';
// import ListView from "deprecated-react-native-swipeable-listview";
import * as firebase from 'firebase';
// import * as Facebook from 'expo-facebook';
// import { Alert } from 'react-native';
import BodyText from './src/elements/BodyText';

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
        <View style={styles.appbar}>
          <View>
            <Text style={styles.appbarTitle}>Memoapp</Text>
          </View>
        </View>

        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2020/05/29</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2020/05/29</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2020/05/29</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2020/05/29</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2020/05/29</Text>
          </View>
        </View>
        <View style={styles.memoAddButton}>
          <Text style={styles.memoAddButtonTitle}>+</Text>
        </View>
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
  memoAddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#e31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  memoAddButtonTitle: {
    fontSize: 32,
    color: '#eee',
  },
  memoList: {
    // backgroundColor: "#eee",
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    paddingTop: 30,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 10,
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
