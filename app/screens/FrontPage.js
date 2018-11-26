import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ItemDetail from '../components/ItemDetail';
import Header from '../components/Header';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default class FrontPage extends React.Component {
  state = {
    items: [],
    // show: [],
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
    return items.map(item => <ItemDetail key={item.objectID} item={item} />);
  }

  render() {
    return (
      <SafeAreaView>
        <Header headerText="Hacker News" />
        <ScrollView>{this.renderItems()}</ScrollView>
      </SafeAreaView>
    );
  }
}
