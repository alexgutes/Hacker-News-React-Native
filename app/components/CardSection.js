import React from 'react';
import { Text, View } from 'react-native';

const styles = {
  containerStyle: {
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
  },
};

export default function CardSection(props) {
  return <View style={styles.containerStyle}>{props.children}</View>;
}
