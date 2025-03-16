import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";  // Importando o axios
import {
  Container,
  ButtonText,
  ContainerAtributos,
  Button,
  ContainerButton,
  ContainerHeader,
  ContainerImage,
  ImageCategoria,
  ImageButton,
} from "./styles";
import { CaretDoubleLeft } from "phosphor-react-native";
import { ButtonGoBack } from "./styles";
import InputDescricao from "../../../components/Input_Descricao";
import COLORS from "../../../styles/theme";
import { Header } from "@src/components/Header/Header";
import Edit from '../../../assets/edit.png';

export const Categorias = () => {
  const navigation = useNavigation();
  const [categoria, setCategoria] = useState(""); // Estado para armazenar a categoria

  const handleSendData = async () => {
    // Verifique se os campos estão preenchidos
    if (categoria.trim() !== "") {
      try {
        // Enviar dados para o backend (API)
        const response = await axios.post('http://localhost:3000/api/categories', {categoria});  // Substitua pelo seu endpoint real
        
        // Verifica a resposta da API
        if (response.status === 201) {
          navigation.navigate('TabRoutes'); // Navega para a tela de Carteira
        } else {
          console.error("Erro ao cadastrar categoria:", response.data);
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    } else {
      alert("Preencha todos os campos.");
    }
  };

  const handleGoBackHome = () => {
    navigation.goBack();
  };

  return (
    <>
      <ContainerHeader>
        <Header appName="Categorias" />
      </ContainerHeader>
      <Container>
        <ContainerImage
          style={{
            shadowColor: COLORS.COLORS.BLACK,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 6,
          }}
        >
          <ImageButton>
            <ImageCategoria source={Edit} />
          </ImageButton>
        </ContainerImage>

        <ContainerAtributos>
          <InputDescricao
            placeholder="Entre com o nome da categoria"
            value={categoria}  // Usando o estado correto
            onChangeText={setCategoria}  // Atualiza o estado corretamente
          />
        </ContainerAtributos>

        <ContainerButton style={{ zIndex: -1 }}>
          <Button
            title=""
            onPress={handleSendData}  // Chama a função para enviar os dados
            style={{
              shadowColor: COLORS.COLORS.PURPLEDARK2,
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 6,
            }}
          >
            <ButtonText>Cadastrar</ButtonText>
          </Button>
        </ContainerButton>

        <ButtonGoBack onPress={handleGoBackHome}>
          <CaretDoubleLeft size={25} weight="light" />
        </ButtonGoBack>
      </Container>
    </>
  );
};
