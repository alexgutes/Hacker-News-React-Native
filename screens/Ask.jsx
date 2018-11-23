import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Ask() {
  return (
    <View style={styles.container}>
      <Text>Ask</Text>
    </View>
  );
}

export default Ask;
