import React from 'react';
import {
  StyleSheet, View, Text, TouchableHighlight,
} from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('Detail'); }}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2020/05/29</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('Detail'); }}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム2</Text>
            <Text style={styles.memoDate}>2020/05/29</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('Detail'); }}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム3</Text>
            <Text style={styles.memoDate}>2020/05/29</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('Detail'); }}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム4</Text>
            <Text style={styles.memoDate}>2020/05/29</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('Detail'); }}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム5</Text>
            <Text style={styles.memoDate}>2020/05/29</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
});
export default MemoList;
