/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Card, CardItem, Body, Text,
} from 'native-base';
// import Card from './Card';


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
    const {
      title, url, points, num_comments,
    } = this.props.item;
    return (
      <Card>
        <CardItem>
          <Body>
            <Text>{title}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={styles.grayText}>
              {this.parseHost(url)}
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={styles.grayText}>
              {points}
              {' '}
              points
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={styles.grayText}>
              {num_comments}
              {' '}
              comments
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default ItemDetail;
