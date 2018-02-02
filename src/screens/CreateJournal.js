import React, { Component } from 'react';

import CreateJournal from '../containers/CreateJournal';

export default class CreateJournalScreen extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: 'Create New Entry',
  });
  render() {
    return (
      <CreateJournal navigation={this.props.navigation} />
    );
  }
}
