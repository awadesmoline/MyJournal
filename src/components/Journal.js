import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class Journal extends Component<{}> {
  render() {
    const { title, body } = this.props.currentJournal;
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
