import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Show extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Show</Text>
      </View>
    );
  }
}
export default Show;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
