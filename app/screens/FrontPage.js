import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Content } from 'native-base';
import ItemCard from '../components/ItemCard';
import HeaderBar from '../components/HeaderBar';


export default class FrontPage extends React.Component {
  state = {
    items: [],
  };

  componentWillMount() {
    fetch('http://hn.algolia.com/api/v1/search?tags=front_page')
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
        <HeaderBar title="HN Front Page" />
        <Content padder>
          <ScrollView>{this.renderItems()}</ScrollView>
        </Content>
      </Container>
    );
  }
}
