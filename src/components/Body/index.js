import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Image, Text } from 'react-native';

import { Styles } from './styles'

export default function Body() {
  return (
    <>
      <View style={Styles.content}>
        <View style={Styles.card}>
          <View style={Styles.cardHeader}>
            <Icon name="attach-money" size={30} color="#666" />
            <Icon name="visibility-off" size={30} color="#666" />
          </View>
          <View style={Styles.cardContent}>
            <Text style={Styles.title}>Saldo Disponível</Text>
            <Text style={Styles.description}>R$ 197.611,51</Text>
          </View>
          <View style={Styles.cardFooter}>
            <Icon name="arrow-upward" size={25} color="#8B10AE" />
            <Text style={Styles.annotation}>Transferência de R$ 1970,50 recebida de Isaac Miranda Hoje às 10:00h</Text>
          </View>
        </View>
      </View>
    </>
  )
}


