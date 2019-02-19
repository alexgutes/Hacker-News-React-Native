import React from 'react';
import {
  Header, Left, Body, Right, Title,
} from 'native-base';
import { SafeAreaView } from 'react-native';

const styles = {
  viewStyle: {
    backgroundColor: 'rgb(255,91,1)',

  },
  textStyle: {
    color: 'white',
    fontFamily: 'staatliches',
    fontSize: 24,
  },
};

export default function HeaderBar(props) {
  const { viewStyle, textStyle } = styles;
  const { title } = props;

  return (
    <SafeAreaView>
      <Header style={viewStyle}>
        <Left />
        <Body>
          <Title style={textStyle}>{title}</Title>
        </Body>
        <Right />
      </Header>
    </SafeAreaView>
  );
}
