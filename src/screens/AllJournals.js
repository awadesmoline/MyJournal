import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AllJournals from '../containers/AllJournals';


export default class AllJournalsScreen extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: 'All Journal Entries',
    headerRight: <Icon
      size={20}
      style={{ marginRight: 10 }}
      name={'note'}
      onPress={() => navigation.navigate('CreateJournal')}
    />,
  });
  render() {
    return (
      <AllJournals navigation={this.props.navigation} />
    );
  }
}
