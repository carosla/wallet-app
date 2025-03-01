import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Input, Button, ButtonText } from './styles';
import { Text } from 'react-native';
import { CaretDoubleLeft } from 'phosphor-react-native';
import {
  ButtonGoBack,
} from './styles';

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
      <Text>Digite o título da transação:</Text>
      <Input
        placeholder="Ex: Compra no mercado"
        value={title}
        onChangeText={setTitle}
      />

      <Text>Digite a descrição:</Text>
      <Input
        placeholder="Ex: Compras do mês"
        value={subtitle}
        onChangeText={setSubtitle}
      />

      <Text>Digite o valor da transação:</Text>
      <Input
        placeholder="R$ 0,00"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <Button onPress={handleSendData}>
        <ButtonText>Enviar</ButtonText>
      </Button>
      <ButtonGoBack onPress={handleGoBackHome}>
        <CaretDoubleLeft size={32} weight="light" />
      </ButtonGoBack>
    </Container>
  );
};
