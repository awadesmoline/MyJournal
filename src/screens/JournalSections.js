import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import JournalSections from '../components/JournalSections';


export default class AllJournalsScreen extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: 'Journal Sections',
    headerRight: <Icon
      size={20}
      style={{ marginRight: 10 }}
      name={'note'}
      onPress={() => navigation.navigate('CreateJournal')}
    />,
  });
  render() {
    return (
      <JournalSections navigation={this.props.navigation} />
    );
  }
}
