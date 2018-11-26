import React from 'react';
import { Text, View } from 'react-native';

const styles = {
  viewStyle: {
    backgroundColor: '#ed702e',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
  },
};

export default function Header(props) {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {' '}
        {props.headerText}
        {' '}
      </Text>
    </View>
  );
}
