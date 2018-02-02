import React, { Component } from 'react';
import { Button } from 'react-native';
import Journal from '../containers/Journal';

export default class JournalScreen extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.note.title,
    headerRight: <Button title={'Edit'} onPress={() => navigation.navigate('CreateJournal', { note: navigation.state.params.note})} />
  });
  render() {
    return (
      <Journal navigation={this.props.navigation} />
    );
  }
}
