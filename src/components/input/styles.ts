import styled, {css, DefaultTheme} from "styled-components/native";
import { TextInput, ViewProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface IContainerProps extends ViewProps{
    hasError: boolean;
    isFocused: boolean;
    isFilled?: boolean;
}

interface ITextContainerProps extends ViewProps{
    hasError: boolean;
    isFocused: boolean;
    isFilled?: boolean;
}

export const Button = styled.View`
    width: 85%;
    height: ${RFValue(50)}px;
    flex-direction: row;
    margin-bottom: ${RFValue(10)}px;
`;

export const IConContainer = styled.View<IContainerProps>`
    width: ${RFValue(55)}px;
    height: ${RFValue(50)}px;
    justify-content: center;
    align-items: center;

    ${({isFocused, isFilled}: {isFocused:DefaultTheme}) => (isFocused || isFilled) && css`
        border_bottom-width: 
    `}

    ${({theme}: {theme: DefaultTheme}) => theme.FONTS.POPPINSLIGHT}
`;