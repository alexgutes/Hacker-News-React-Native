import React from 'react';
import {
  Header, Left, Body, Right, Title,
} from 'native-base';
import { SafeAreaView } from 'react-native';

const styles = {
  viewStyle: {
    backgroundColor: '#ed702e',

  },
  textStyle: {
    color: 'white',
    fontFamily: 'staatliches',
    fontSize: 56,
  },
};

export default function HeaderBar(props) {
  const { viewStyle, textStyle } = styles;

  return (
    <SafeAreaView>
      <Header style={viewStyle}>
        <Left />
        <Body>
          <Title style={textStyle}>{props.title}</Title>
        </Body>
        <Right />
      </Header>
    </SafeAreaView>
  );
}
