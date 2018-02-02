import React, { Component } from 'react';
import {
  TextInput,
  View
} from 'react-native';


export default class CreateJournal extends Component {
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
