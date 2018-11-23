import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Show() {
  return (
    <View style={styles.container}>
      <Text>Show</Text>
    </View>
  );
}

export default Show;
