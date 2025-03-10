import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
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
import Edit from '../../../assets/edit.png'

export const Categorias = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSendData = () => {
    if (title.trim() !== "" && subtitle.trim() !== "" && price.trim() !== "") {
      navigation.navigate("Carteira");
    }
  };

  const handleGoBackHome = () => {
    navigation.goBack();
  };

  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const options = [
    { label: "Entrada", value: "entrada" },
    { label: "Saída", value: "saida" },
    { label: "Opção 3", value: "opcao3" },
  ];

  return (
    <><ContainerHeader>
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
            value={title}
            onChangeText={setTitle} />
        </ContainerAtributos>

        <ContainerButton style={{ zIndex: -1 }}>
          <Button
            title=""
            onPress={handleSendData}
            style={{
              // Sombra para iOS
              shadowColor: COLORS.COLORS.PURPLEDARK2,
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 4,

              // Sombra para Android
              elevation: 6,
            }}
          >
            <ButtonText>Cadastrar</ButtonText>
          </Button>
        </ContainerButton>

        <ButtonGoBack onPress={handleGoBackHome}>
          <CaretDoubleLeft size={25} weight="light" />
        </ButtonGoBack>
      </Container></>
  );
};
