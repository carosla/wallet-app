import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import Transfer from '../../../assets/convert.png';
import Payments from '../../../assets/export.png';
import PayOut from  '../../../assets/money-send.png';
import TopUp from '../../../assets/add-circle.png';

import { 
  Container,
  Content,
  ViewContainer,
  ViewBalanceLeft,
  ViewBalanceRight,
  TitleValor,
  TitleValorConta,
  TitleCartao,
  TitleNomeCartao,
  Body,
  IconPayment,
  IconTransfer,
  IconPayOut,
  IconTopUp,
  TitleTransfer,
  TitlePayments,
  TitlePayOut,
  TitleTopUp,
  Footer,
  ContentFlat,
  ContentFlatHeader,
  Title,
  ButtonVerTotos,
  ButtonTitleVertotos,
  IconTransaction,
  DetailsTransaction,
  NameTransaction,
  SubtTitleTransaction,
  AmountTransaction
} from './styles';

import { Header } from '../../../components/Header/Header';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

// Definição do tipo de parâmetros esperados na navegação
type RootStackParamList = {
  Carteira: { title?: string; subtitle?: string; price?: string };
};

// Definição do tipo de transação
type Transaction = {
  id: number;
  title: string;
  subtitle: string;
  price: string;
};

export const Carteira = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, 'Carteira'>>();

  const [saldo, setSaldo] = useState(0); // Saldo inicial fictício
  const [transactions, setTransactions] = useState<Transaction[]>([]); // Estado das transações

  useEffect(() => {
    if (route.params?.price) {
      setSaldo(prevSaldo => prevSaldo - parseFloat(route.params.price ?? "0"));

      const newTransaction: Transaction = {
        id: Date.now(), // Usa timestamp para evitar duplicação
        title: route.params.title || "Nova Transação",
        subtitle: route.params.subtitle || "Sem descrição",
        price: route.params.price
      };

      setTransactions(prevTransactions => [newTransaction, ...prevTransactions]); // ✅ Agora adiciona sem sobrescrever
    }
  }, [route.params]);

  return (
    <Container>
      <Header textLeft avatarRight appName='Wallet' />

      <ViewContainer>
        <Content>
          <ViewBalanceLeft>
            <TitleValor>Valor Total</TitleValor>
            <TitleValorConta>R$ {saldo.toFixed(2)}</TitleValorConta>
          </ViewBalanceLeft>

          <ViewBalanceRight>
            <TitleCartao>Cartão</TitleCartao>
            <TitleNomeCartao>Wallet</TitleNomeCartao>
          </ViewBalanceRight>
        </Content>

        <Body>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <IconTransfer source={Transfer}/>
            <TitleTransfer>Transf.</TitleTransfer>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <IconPayment source={Payments}/>
            <TitlePayments>Forma Pagto</TitlePayments>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Transacao')} style={{ alignItems: 'center' }}>
            <IconPayOut source={PayOut}/>
            <TitlePayOut>Pagtos</TitlePayOut> 
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('DetailsCard')} style={{ alignItems: 'center' }}>
            <IconTopUp source={TopUp}/>
            <TitleTopUp>Add Cartão</TitleTopUp>
          </TouchableOpacity>
        </Body>
      </ViewContainer>

      <Footer>
        <FlatList
          data={transactions} // Agora exibe as transações do estado
          renderItem={({ item }) => (
            <ContentFlat>
              <IconTransaction />
              <DetailsTransaction>
                <NameTransaction>{item.title}</NameTransaction>
                <SubtTitleTransaction>{item.subtitle}</SubtTitleTransaction>
              </DetailsTransaction>
              <AmountTransaction>R$ {item.price}</AmountTransaction>
            </ContentFlat>
          )}
          ListHeaderComponent={
            <ContentFlatHeader>
              <Title>Minhas Transações</Title>
              <ButtonVerTotos onPress={() => navigation.navigate('Transaction')}>
                <ButtonTitleVertotos>Ver Todos</ButtonTitleVertotos>
              </ButtonVerTotos>
            </ContentFlatHeader>
          }
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()} 
        />
      </Footer>
    </Container>
  );
};
