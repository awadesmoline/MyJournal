/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import AllJournals from './components/AllJournals';
import Journal from "./components/Journal";
import CreateJournal from "./components/CreateJournal";

export default class App extends Component<{}> {
  render() {
    const AppNavigator = StackNavigator({
      AllJournals: { screen: AllJournals },
      Journal: { screen: Journal },
      CreateJournal: { screen: CreateJournal }
    });
    return (
      <AppNavigator />
    );
  }
}
