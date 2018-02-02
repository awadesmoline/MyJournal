import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';


export default class CreateJournal extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Create New Entry',
  });

  state = {
    title: '',
    body: ''
  };

  handleTitleChange = (title) => {
    this.setState({ title })
  };

  handleBodyChange = (body) => {
    this.setState({ body })
  };

  render() {
    return (
      <View style={{ flex: 1}}>
        <View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={this.handleTitleChange}
            value={this.state.title}
          />
        </View>
        <View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={this.handleBodyChange}
            value={this.state.body}
          />
        </View>
      </View>
    );
  }
}
