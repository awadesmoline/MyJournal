import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Card, CardSection } from './common';
import AllJournals from '../containers/AllJournals';


export default class JournalSections extends Component {
  renderAllJournals() {
    return (<AllJournals />);
  }

  render() {
    return (
        <View>
          <TouchableOpacity 
          onPress={() => {
          this.props.navigation.navigate('AllJournals')
        }}>
          <Card >
            <CardSection style={{ height: 100, borderBottomWidth: 0, paddingBottom: 0, justifyContent: 'center', flexDirection: 'column' }}>
              <Text style={{ fontSize: 16, textAlign: 'center' }}>
                Public Journals
              </Text>
            </CardSection>
          </Card>
          </TouchableOpacity>
          <TouchableOpacity>
          <Card>
            <CardSection style={{ height: 100, borderBottomWidth: 0, paddingBottom: 0, justifyContent: 'center', flexDirection: 'column' }}>
              <Text style={{ fontSize: 16, textAlign: 'center' }}>
                Private Journals
              </Text>
            </CardSection>
          </Card>
          </TouchableOpacity>
          <TouchableOpacity>
          <Card>       
            <CardSection style={{ height: 100, borderBottomWidth: 0, paddingBottom: 0, justifyContent: 'center', flexDirection: 'column' }}>
              <Text style={{ fontSize: 16, textAlign: 'center' }}>
                Shared Journals
              </Text>
            </CardSection>
          </Card>
          </TouchableOpacity>
        </View>
    );
  }

}
