import React, { Component } from 'react';
import {
  TextInput,
  View,
  Text,
  Button
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

  handleSave = () => {
    const { title, body } = this.state;
    this.props.saveJournal({ title, body });
    this.setState({ title: '', body: '' });
    this.props.navigation.goBack()
  };

  render() {
    return (
      <View style={{ flex: 1}}>
        <View>
          <Text style={{ textAlign: 'center'}}>Title</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={this.handleTitleChange}
            value={this.state.title}
          />
        </View>
        <View style={{ height: 400 }}>
          <Text style={{ textAlign: 'center'}} >Body</Text>
          <TextInput
            style={{ flex: 1, borderColor: 'gray', borderWidth: 1}}
            onChangeText={this.handleBodyChange}
            value={this.state.body}
            editable={true}
            multiline
          />
        </View>
        <Button title={'Save'} onPress={this.handleSave}/>
      </View>
    );
  }
}
