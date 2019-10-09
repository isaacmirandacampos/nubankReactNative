import React from 'react';
import { View } from 'react-native';

import Header from '~/components/Header';
import Menu from '~/components/Menu';
import Body from '~/components/Body';
import Tabs from '~/components/Tabs';
import { Styles } from './styles';

export default function Main() {
  return (
    <View style={Styles.container}>
      <Header />
      <View style={Styles.content}>
        <Menu />
        <Body />
      </View>
      <Tabs />
    </View>
  );
};
