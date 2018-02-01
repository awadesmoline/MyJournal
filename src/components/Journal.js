import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

export default class Journal extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.note.title
  });

  render() {
    const { note: { title, body }} = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1}}>
        <View>
          <Text>{title}</Text>
        </View>
        <View>
          <Text>{body}</Text>
        </View>
      </View>
    );
  }
}
