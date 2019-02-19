import React from 'react';
import { ScrollView } from 'react-native';
import {
  Container, Content,
} from 'native-base';
import ItemCard from '../components/ItemCard';
import HeaderBar from '../components/HeaderBar';


export default class Show extends React.Component {
  state = {
    items: [],
  };

  componentWillMount() {
    fetch('http://hn.algolia.com/api/v1/search?tags=show_hn')
      .then(response => response.json())
      .then((response) => {
        this.setState({ items: response.hits });
      });
  }

  renderItems() {
    const { items } = this.state;
    return items.map(item => <ItemCard key={item.objectID} item={item} />);
  }

  render() {
    return (
      <Container>
        <HeaderBar title="Show HN" />
        <Content padder>
          <ScrollView>{this.renderItems()}</ScrollView>
        </Content>
      </Container>
    );
  }
}
