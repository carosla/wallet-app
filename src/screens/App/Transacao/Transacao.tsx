import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Button, ButtonText } from './styles';
import { Text } from 'react-native';
import { CaretDoubleLeft } from 'phosphor-react-native';
import {
  ButtonGoBack,
} from './styles';
import InputTransaction from '../../../components/input_old';
import InputValor from '../../../components/Input_Valor';
import { ButtonPersonalizado } from "../../../components/ButtonPersonalizado/ButtonPersonalizado"

export const Transacao = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [price, setPrice] = useState('');

  const handleSendData = () => {
    if (title.trim() !== '' && subtitle.trim() !== '' && price.trim() !== '') {
      navigation.navigate('Carteira');
    }
  };

  const handleGoBackHome = () => {
    navigation.goBack()
}

  return (

    <Container>
      <InputValor
        placeholder="R$ 0,00"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}    />

      <Text>Digite o título da transação:</Text>
      <InputTransaction
        name='titulo'
        placeholder="Ex: Compra no mercado"
        value={title}
        onChangeText={setTitle}
      />

      <Text>Digite a descrição:</Text>
      <InputTransaction
        name='descricao'
        placeholder="Ex: Compras do mês"
        value={subtitle}
        onChangeText={setSubtitle}
      />

      

      <ButtonPersonalizado title='' onPress={handleSendData}>
        <ButtonText>Enviar</ButtonText>
      </ButtonPersonalizado>
      <ButtonGoBack onPress={handleGoBackHome}>
        <CaretDoubleLeft size={32} weight="light" />
      </ButtonGoBack>
    </Container>
  );
};
