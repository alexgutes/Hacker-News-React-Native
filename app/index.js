import React from 'react';
import { Font } from 'expo';
import { Spinner } from 'native-base';
import AppContainer from './config/navigation';


export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({

      staatliches: require('../assets/fonts/Staatliches-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <Spinner />;
    }
    return <AppContainer />;
  }
}
