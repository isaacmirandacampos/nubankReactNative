import React from 'react';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TabsContainer, TabItem, TabText } from './styles'
export default function Tabs({ translateY }) {
  return (
    <Container style={{
      transform: [{
        translateY: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [0, 150],
          extrapolate: 'clamp',
        })
      }],
      opacity: translateY.interpolate({
        inputRange: [0, 350],
        outputRange: [1, 0.2],
        extrapolate: 'clamp',
      })
    }}>
      <TabsContainer>
        <TabItem>
          <Icon name="help-outline" size={30} color="#FFF" />
          <TabText>Me Ajuda</TabText>
        </TabItem>
        <TabItem>
          <Icon name="person-add" size={30} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="chat-bubble-outline" size={30} color="#FFF" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={30} color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={30} color="#FFF" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={30} color="#FFF" />
          <TabText>Bloquear Cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );

};
