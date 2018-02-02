import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View
} from 'react-native';
import { Cell, Separator } from 'react-native-tableview-simple';

const sampleNotes = [
  { id: 1, title: 'First Note', body: 'This is my very first Note'},
  { id: 2, title: 'Second Note', body: 'This is my very second Note'},
  { id: 3, title: 'Second Note', body: 'This is my very second Note'}
];

export default class AllJournals extends Component {
  componentWillMount() {
    this.props.setAllJournals();
  }
  renderJournal = ({ item: note, index }) => {
    return (
      <Cell
        onPress={() => this.props.navigation.navigate('Journal', { note })}
        key={index}
        accessory="DisclosureIndicator"
        cellContentView={
          <View style={{ flex: 1 }}>
            <Text key={index}>{note.title}</Text>
          </View>
        }
      />
    )
  };
  render() {
    return (
      <View style={{ flex: 1}}>
        <FlatList
          data={this.props.journals}
          keyExtractor={(item, index) => index}
          renderItem={this.renderJournal}
          ItemSeparatorComponent={({ highlighted }) =>
            <Separator isHidden={highlighted} />}
        />
      </View>
    );
  }
}
