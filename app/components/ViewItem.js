import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ViewItem extends Component {
  state = {
    data: {},
  }

  componentWillMount() {
    const id = 54003;
    fetch(`http://hn.algolia.com/api/v1/items/${id}`)
      .then(res => res.json())
      .then((res) => {
        this.setState({ data: res });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <View>
        <Text>{data}</Text>
      </View>
    );
  }
}
