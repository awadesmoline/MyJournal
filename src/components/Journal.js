import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class Journal extends Component<{}> {
  render() {
    const { title, body } = this.props.currentJournal;
    const { bodyText, titleText } = styles;
    return (
      <View style={{ flex: 1}}>
        <View>
          <Text style={titleText}>{title}</Text>
        </View>
        <View>
          <Text style={bodyText}>{body}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold', 
},
  bodyText: {
    fontSize: 20,
    marginLeft: 20
  },

});
