import React, { Component } from 'react';
import {
  TextInput,
  View,
  Text,
  Button
} from 'react-native';


export default class CreateJournal extends Component {
  state = {
    id: null,
    title: '',
    body: ''
  };

  // componentWillMount() {
  //   if (this.props.currentJournal) {
  //     const { id, title, body } = this.props.currentJournal;
  //     this.setState({
  //       id,
  //       title,
  //       body
  //     })
  //   }
  // }

  componentWillUnmount() {
    this.props.setCurrentJournal({});
  }

  handleTitleChange = (title) => {
    this.setState({ title })
  };

  handleBodyChange = (body) => {
    this.setState({ body })
  };

  handleSave = () => {
    const { id, title, body } = this.state;
    this.props.saveJournal({ id, title, body });
    this.setState({ id: null, title: '', body: '' });
    this.props.navigation.goBack()
  };

  render() {
    return (
      <View style={{ flex: 1}}>
          <Text style={{ textAlign: 'center'}}>Title</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={this.handleTitleChange}
            value={this.state.title}
          />
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
