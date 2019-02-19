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
      'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;
    if (!fontLoaded) {
      return <Spinner />;
    }
    return <AppContainer />;
  }
}
