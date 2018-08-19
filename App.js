/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button
} from "react-native";

export default class App extends Component {
  constructor() {
    super()
    this.state={}
    this.buttonPressed = this.buttonPressed.bind(this)
  }
  buttonPressed() {
    // const username = this._username._lastNativeText
    // const password = this._password._lastNativeText
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 20}}>Username</Text>
        <TextInput style={{borderBottomColor: 'green', borderBottomWidth: 1}}
          defaultValue={this.state.username}
          onChangeText={text => this.setState({username: text})}
        />
        <Text style={{marginTop: 10, marginBottom: 20}}>Password</Text>
        <TextInput style={{borderBottomColor: 'green', borderBottomWidth: 1}} 
                defaultValue={this.state.password}
                onChangeText={text => this.setState({password: text})}
        />

        <Button title={"Sign In"} onPress={this.buttonPressed}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 70
  }
});
