import React from 'react';
import { FlatList } from 'react-native';
import { Container, Content } from 'native-base';
import ItemCard from '../components/ItemCard';
import HeaderBar from '../components/HeaderBar';


export default class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      items: [],
      page: 0,
      error: null,
      refreshing: false,
    };
  }

  componentWillMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, items } = this.state;
    const url = `http://hn.algolia.com/api/v1/search?tags=front_page&page=${page}`;
    this.setState({ loading: true });
    fetch(url)
      .then(response => response.json())
      .then((response) => {
        this.setState({
          items: page === 0 ? response.hits : [...items, ...response.hits],
          error: response.error || null,
          loading: false,
          refreshing: false,
        });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  }

  handleLoadMore = () => {
    console.log('loadmore');
    this.setState({
      pages: this.state.pages + 1,
    },
    () => {
      this.makeRemoteRequest();
      console.log('second request made');
    });
  }

  render() {
    const { items } = this.state;
    return (
      <Container>
        <HeaderBar title="HN Front Page" />
        <Content padder>
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <ItemCard item={item} />
            )}
            keyExtractor={item => item.objectID}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0}
          />
        </Content>
      </Container>
    );
  }
}
