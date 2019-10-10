import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';

import {
  Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation
} from './styles';

export default function Main() {
  return (
    <>

      <Container>
        <Header />
        <Content>
          <Card>

            <CardHeader>
              <Icon name="attach-money" size={30} color="#444" />
              <Icon name="visibility-off" size={30} color="#444" />
            </CardHeader>

            <CardContent>
              <Title>Saldo Disponível</Title>
              <Description>R$ 197.611,65</Description>
            </CardContent>

            <CardFooter>
              <Annotation>
                Transferência de R$ 1970,00 recebida de Isaac Miranda hoje às 06:00h
              </Annotation>
            </CardFooter>

          </Card>
        </Content>
        <Tabs />
      </Container>
    </>
  );
};
