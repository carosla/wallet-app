import { View, Text, Touchable } from 'react-native'
import React from 'react'

import Tranfer from '../../../assets/convert.png';
import Payments from '../../../assets/export.png';
import PayOut from  '../../../assets/money-send.png'
import TopUp from '../../../assets/add-circle.png';

import { 
  Container,
  Content,
  ViewContainer,
  ViewBalanceLeft,
  ViewBalanceRight,
  TitleValor,
  TitleCartao,
  TitleValorConta,
  Body,
  IconPayment,
  IconTransfer,
  IconPayOut,
  IconTopUp,
  TitleNomeCartao,
  TitleTransfer
} from './styles'
import { Header } from '../../../components/Header/Header'
import { TouchableOpacity } from 'react-native-gesture-handler';
Header

export const Carteira = () => {
  return (
    <Container>
      <Header/>
      <ViewContainer>
        <Content>
            <ViewBalanceLeft>
                <TitleValor>Valor Total</TitleValor>
                <TitleValorConta>R$ 1.000,00</TitleValorConta>
            </ViewBalanceLeft>

            <ViewBalanceRight>
                <TitleCartao>Cartão</TitleCartao>
                <TitleNomeCartao>Wallet</TitleNomeCartao>
            </ViewBalanceRight>
        </Content>

        <Body>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <IconTransfer source={Tranfer}/>
            <TitleTransfer>Tranf.</TitleTransfer>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <IconPayment source={Payments}/>
            <TitleTransfer>Pagtos</TitleTransfer>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <IconPayOut source={PayOut} />
            <TitleTransfer>Pagto</TitleTransfer>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <IconTopUp source={TopUp}/>
            <TitleTransfer>Mais opções</TitleTransfer>
          </TouchableOpacity>
        </Body>
      </ViewContainer>
      
    </Container>
  )
}