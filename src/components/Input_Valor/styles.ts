import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
    height: 50px;
    width: 60%;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    border-radius: 8px;
    border-bottom-width: 2px;
`;

export const InputContainer = styled.TextInput`
    flex: 1;
    height: 50px;
    border-width: 0;
    font-size: 14px;
    font-family: ${({theme}: {theme: DefaultTheme}) => theme.FONTS.POPPINSLIGHT};
    border-bottom-width: 2px;
    outline: none;

`