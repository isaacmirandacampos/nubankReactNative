import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Image, ScrollView } from 'react-native';

import { Styles } from './styles'

export default function Tabs() {
  return (
    <>
      <View style={Styles.container}>
        <ScrollView
          horizontal
          contentContainerStyle={{ paddingLeft: 10, paddingRight: 20 }}
          showsHorizontalScrollIndicator={false}
        >
          <View style={Styles.tabItem}>
            <Icon name="help-outline" size={25} color="#FFF" />
            <Text style={Styles.tabText}>Me Ajuda</Text>
          </View>
          <View style={Styles.tabItem}>
            <Icon name="person-outline" size={25} color="#FFF" />
            <Text style={Styles.tabText}>Indicar amigos</Text>
          </View>

          <View style={Styles.tabItem}>
            <Icon name="monetization-on" size={25} color="#FFF" />
            <Text style={Styles.tabText}>Cobrar</Text>
          </View>

          <View style={Styles.tabItem}>
            <Icon name="arrow-downward" size={25} color="#FFF" />
            <Text style={Styles.tabText}>Depositar</Text>
          </View>

          <View style={Styles.tabItem}>
            <Icon name="arrow-upward" size={25} color="#FFF" />
            <Text style={Styles.tabText}>Transferir</Text>
          </View>

          <View style={Styles.tabItem}>
            <Icon name="line-weight" size={25} color="#FFF" />
            <Text style={Styles.tabText}>Pagar</Text>
          </View>

          <View style={Styles.tabItem}>
            <Icon name="lock" size={25} color="#FFF" />
            <Text style={Styles.tabText}>Bloquear cartão</Text>
          </View>

        </ScrollView>
      </View>
    </>
  );
};
