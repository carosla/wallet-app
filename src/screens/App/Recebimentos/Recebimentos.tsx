import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  ButtonText,
  ContainerAtributos,
  Button,
  ContainerButton,
  ContainerValor,
  ContainerHeader,
} from "./styles";
import { Text } from "react-native";
import { CaretDoubleLeft } from "phosphor-react-native";
import { ButtonGoBack } from "./styles";
import InputDescricao from "../../../components/Input_Descricao";
import InputValor from "../../../components/Input_Valor";
import { ButtonPersonalizado } from "../../../components/ButtonPersonalizado/ButtonPersonalizado";
import COLORS from "../../../styles/theme";
import DropdownInput from "@src/components/Dropdown";
import theme from "../../../styles/theme";
import { Header } from "@src/components/Header/Header";

export const Recebimentos = () => {
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
    { label: "Opção 1", value: "opcao1" },
    { label: "Opção 2", value: "opcao2" },
    { label: "Opção 3", value: "opcao3" },
  ];

  return (
    <><ContainerHeader>
      <Header appName="Recebimentos" />
    </ContainerHeader>
    <Container>

        <ContainerValor>
          <Text
            style={{
              fontFamily: theme.FONTS.POPPINSBOLD,
              marginRight: 5,
              fontSize: 20,
            }}
          >
            R$
          </Text>
          <InputValor
            placeholder="0,00"
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
            placeholderTextColor={COLORS.COLORS.BLACK} />
        </ContainerValor>

        <ContainerAtributos>
          <InputDescricao
            placeholder="Entre com a descrição"
            value={title}
            onChangeText={setTitle} />
        </ContainerAtributos>
        <ContainerAtributos>
          <DropdownInput
            selectedValue={selectedValue}
            onValueChange={setSelectedValue}
            options={options} />
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
            <ButtonText>Enviar</ButtonText>
          </Button>
        </ContainerButton>

        <ButtonGoBack onPress={handleGoBackHome}>
          <CaretDoubleLeft size={25} weight="light" />
        </ButtonGoBack>
      </Container></>
  );
};
