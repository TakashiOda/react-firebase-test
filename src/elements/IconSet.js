import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class IconSet extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>+</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#DDD',
  },
});

export default IconSet;
