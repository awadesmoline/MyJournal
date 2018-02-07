import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Separator } from 'react-native-tableview-simple';
import { Card, CardSection } from "./common";

export default class AllJournals extends Component {
  componentWillMount() {
    this.props.setAllJournals();
  }

  longPressJournal(journalId) {
    console.log('journalId', journalId);
    Alert.alert(
      'Delete Note',
      'Do you want to delete this note?',
      [
        { text: 'YES', onPress: () => this.props.deleteJournal(journalId) },
        { text: 'No' }
      ]
    );
  };

  renderJournal = ({ item: journal, index }) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          this.props.setCurrentJournal(journal);
          this.props.navigation.navigate('Journal')
        }}
        onLongPress={() => this.longPressJournal(journal.id)}
      >
        <View>
          <Card>
            <CardSection style={{ borderBottomWidth: 0, paddingBottom: 0 }}>
              <Text style={{ fontSize: 16, paddingHorizontal: 10 }}>
                {journal.title}
              </Text>
            </CardSection>
            <CardSection style={{ borderBottomWidth: 0 }}>
              <Text style={{  fontSize: 10, paddingHorizontal: 10 }}>
                {journal.body}
              </Text>
            </CardSection>
          </Card>
        </View>
      </TouchableOpacity>
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
