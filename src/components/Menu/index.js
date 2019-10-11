import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, QRCode, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles'

export default function Menu({ translateY }) {
  var qrcode = "/mnt/sda1/www/nubankReactNative/src/assets/QRCode.png"
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 250],
        outputRange: [0, 1],
      })
    }}>
      <Code>
        <QRCode source={require(qrcode)} />
      </Code>
      <Nav>

        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>

        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>

        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar Cartão</NavText>
        </NavItem>

        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configuraçoes</NavText>
        </NavItem>
      </Nav>
      <SignOutButton onPress={() => { }}>
        <SignOutButtonText>SAIR DO APLICATIVO</SignOutButtonText>
      </SignOutButton>
    </Container>
  );

};
