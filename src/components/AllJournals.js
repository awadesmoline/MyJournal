import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';
import { Cell, Separator } from 'react-native-tableview-simple';
import { Card, CardSection, InputField, Spinner } from "./common";

export default class AllJournals extends Component {
  componentWillMount() {
    this.props.setAllJournals();
  }
  renderJournal = ({ item: journal, index }) => {
    return (
      <TouchableWithoutFeedback
        key={index}
        onPress={() => {
          this.props.setCurrentJournal(journal);
          this.props.navigation.navigate('CreateJournal')
        }}
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
      </TouchableWithoutFeedback>
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
