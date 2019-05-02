/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './src/features/Login/login';
import Registration from './src/features/Registration/registration';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home: Login,
    Registration: Registration
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
