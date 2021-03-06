import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { FontAwesome } from '@expo/vector-icons';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  componentDidMount() {
    console.log('didmount!!');
    // const { currentUser } = firebase.auth();
    // firebase.firestore().collection(`users/${currentUser.uid}/memos`)
  }

  handlePress() {
    // const { params } = this.props.navigation.state;
    // this.props.navigation.navigate('MemoCreate', { currentUser: params.currentUser });
    this.props.navigation.navigate('MemoCreate');
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <View>
          <CircleButton onPress={this.handlePress.bind(this)}>
            <FontAwesome size={36} color="white" name="plus" />
          </CircleButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6',
  },
});

export default MemoListScreen;
