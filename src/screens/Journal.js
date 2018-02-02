import React, { Component } from 'react';

import Journal from '../containers/Journal';


export default class JournalScreen extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.note.title
  });
  render() {
    return (
      <Journal navigation={this.props.navigation} />
    );
  }
}
