import React from 'react';
import { View, Image, Text } from 'react-native';

import { Styles } from './styles'

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/Nubank_Logo.png';

export default function Header() {
  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.top}>
          <Image style={Styles.logo} source={logo} />
          <Text style={Styles.title}>Isaac</Text>
        </View>
        <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
      </View>

    </>
  )
}


