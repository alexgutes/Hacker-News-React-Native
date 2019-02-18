/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const urlParse = require('url-parse');

const styles = {
  grayText: {
    color: '#808080',
  },
};

class ItemDetail extends Component {
  parseHost(url) {
    if (url === null) {
      return 'Hacker News';
    }
    const hostName = urlParse(url, true).hostname;
    this.parts = hostName.split('.').slice(-3);
    if (this.parts[0] === 'www') {
      this.parts.shift();
    }
    return this.parts.join('.');
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text>{this.props.item.title}</Text>
        </CardSection>
        <View style={styles.grayText}>

          <CardSection>
            <Text style={styles.grayText}>
              {this.parseHost(this.props.item.url)}
            </Text>
          </CardSection>
          <CardSection>
            <Text style={styles.grayText}>
              {this.props.item.points}
              {' '}
              points
            </Text>
          </CardSection>
          <CardSection>
            <Text style={styles.grayText}>
              {this.props.item.num_comments}
              {' '}
              comments
            </Text>
          </CardSection>
        </View>
      </Card>
    );
  }
}

export default ItemDetail;
