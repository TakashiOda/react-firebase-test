import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CircleButton from '../elements/CircleButton';


class MemoEditScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.memoEditInput} multiline value="Hi" />
        <CircleButton color="ff007f" style={styles.editButton}>
          <FontAwesome name="check" size={24} color="white" />
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default MemoEditScreen;
