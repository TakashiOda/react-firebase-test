import React from 'react';
import {
  StyleSheet, View, Text, TextInput, TouchableHighlight,
} from 'react-native';


class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          ログイン
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }); }}
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text }); }}
        />
        <TouchableHighlight style={styles.button} onPress={() => { this.props.navigation.navigate('Home'); }} underlayColor="#c70F66">
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#E31676',
    height: 48,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    alignSelf: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default LoginScreen;
