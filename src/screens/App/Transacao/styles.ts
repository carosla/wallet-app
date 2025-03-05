import { Pressable } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const ContainerValor = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-family: ${({theme}: {theme: DefaultTheme}) => theme.FONTS.POPPINSBOLD};
`;

export const ContainerAtributos = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-family: ${({theme}: {theme: DefaultTheme}) => theme.FONTS.POPPINSBOLD};
`;

export const ContainerButton = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #fff;
`;

export const Button = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
  background-color:rgb(197, 203, 211);
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const ButtonGoBack = styled(Pressable)`
    position: absolute;
    bottom: 20px;
    right: 30px;
    padding: 10px;
    border-radius: 30px;
    background-color: ${({ theme }: {theme: DefaultTheme}) => theme.COLORS.GRAY4};
`;
