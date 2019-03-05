import React from 'react';
import { FlatList } from 'react-native';
import { Container, Content, Spinner } from 'native-base';
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
    const url = `http://hn.algolia.com/api/v1/search?tags=show_hn&page=${page}&hitsPerPage=15`;
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
    this.setState(state => ({
      page: state.page + 1,
    }),
    () => {
      this.makeRemoteRequest();
    });
  }

  renderSpinner = () => {
    const { loading } = this.state;
    if (!loading) return null;

    return <Spinner color="#ff5b01" />;
  }

  render() {
    const { items } = this.state;
    return (
      <Container>
        <HeaderBar title="Show HN" />
        <Content
          padder
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <ItemCard item={item} />
            )}
            keyExtractor={item => item.objectID}
            onEndReached={() => this.handleLoadMore()}
            onEndReachedThreshold={0}
            ListFooterComponent={this.renderSpinner}
          />
        </Content>
      </Container>
    );
  }
}
