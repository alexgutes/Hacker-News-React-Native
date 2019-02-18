import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ItemDetail from '../components/ItemDetail';
import Header from '../components/Header';


export default class Ask extends React.Component {
  state = {
    items: [],
  };

  componentWillMount() {
    fetch('http://hn.algolia.com/api/v1/search?tags=ask_hn')
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
        <Header headerText="Ask HN" />
        <ScrollView>{this.renderItems()}</ScrollView>
      </SafeAreaView>
    );
  }
}
