import React, { Component } from 'react';
import { Button } from 'react-native';
import Journal from '../containers/Journal';

export default class JournalScreen extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
  });
  render() {
    return (
      <Journal navigation={this.props.navigation} />
    );
  }
}
