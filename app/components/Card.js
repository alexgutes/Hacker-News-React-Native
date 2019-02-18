import React from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    paddingLeft: 5,
    borderWidth: 1,
    // borderRadius: 2,
    borderColor: '#ddd',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

export default function Card(props) {
  return <View style={styles.containerStyle}>{props.children}</View>;
}
