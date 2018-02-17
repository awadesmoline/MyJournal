import React, { Component } from 'react';
import {
  TextInput,
} from 'react-native';
import { Card, CardSection, Button } from './common/index';


export default class CreateJournal extends Component {
  state = {
    id: null,
    title: '',
    body: '',
  };

  componentWillMount() {
    if (this.props.currentJournal) {
      const { id, title, body } = this.props.currentJournal;
      this.setState({
        id,
        title,
        body
      });
    }
  }

  componentWillUnmount() {
    this.props.setCurrentJournal({});
  }

  handleTitleChange = (title) => {
    this.setState({ title });
  };

  handleBodyChange = (body) => {
    this.setState({ body });
  };

  handleSave = () => {
    const { id, title, body } = this.state;
    this.props.saveJournal({ id, title, body });
    this.setState({ id: null, title: '', body: '' });
    this.props.navigation.goBack();
  };


  render() {
    const { titleStyle, bodyStyle } = styles;
    return (
      <Card>
        <CardSection>
          <TextInput
            placeholder="Title"
            onChangeText={this.handleTitleChange}
            style={titleStyle}
            value={this.state.title}
          />
        </CardSection>

        <CardSection>
          <TextInput
            placeholder="Body"
            style={bodyStyle}
            onChangeText={this.handleBodyChange}
            value={this.state.body}
            editable
            multiline
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.handleSave}>
            Save
          </Button>
        </CardSection>
      </Card>

    );
  }
}
const styles = {
  titleStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 40,
    lineHeight: 45,
    flex: 1
  },
  bodyStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    flex: 1,
    height: 300,
    width: 0,
  },

};
