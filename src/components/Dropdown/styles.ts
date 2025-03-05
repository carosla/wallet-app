import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
    width: 90%;
    padding: 10px;
    border-radius: 60px;
    margin-top: 30px;
    position: 'absolute';
    height: 60;
    align-items: 'center';
    justify-content: 'center';
    font-family: ${({theme}: {theme: DefaultTheme}) => theme.FONTS.POPPINSLIGHT};
`;