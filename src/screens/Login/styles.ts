import styled, {DefaultTheme} from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "@src/styles/theme";

export const Container = styled.View`
    flex: 1;
    padding: ${RFValue(10)}px;
`;

export const ContentHeader = styled.View`
    width: 100%;
    margin-left: -10px;
    align-items: center;
    justify-content: space-between;
`;

export const ContentBody = styled.View``;

export const ViewButton = styled.View`
    flex-direction: row;
`;

export const Title = styled.Text`
    text-align: center;
    font-size:  ${RFValue(25)}px;
    margin-top: ${RFValue(40)}px;
    font-family: ${({theme}: {theme: DefaultTheme}) => theme.FONTS.POPPINSMEDIUM};
`;

export const Description = styled.Text`
    margin-top: ${RFValue(60)}px;
    font-size: ${RFValue(15)}px;
    margin-bottom: ${RFValue(15)}px;
    font-family: ${({theme}: {theme: DefaultTheme}) => theme.FONTS.POPPINSLIGHT};
    `;

export const ButtonSignUp = styled.Pressable`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const ContentFooter = styled.View`
    margin-top: 30px;
    align-items: center;
    justify-content: center;
`;

export const TitleButtonSignUp1 = styled.Text`
    font-size: 14px;
    color: ${({theme}: {theme: DefaultTheme}) => theme.COLORS.GRAY4};
    font-family: ${({theme}: {theme: DefaultTheme}) => theme.FONTS.POPPINSMEDIUM};
`;

export const TitleButtonSignUp2 = styled.Text`
    font-size: 17px;
    margin-left: 10px;
    font-family: ${({theme}: {theme: DefaultTheme}) => theme.FONTS.POPPINSBOLD};
    color: ${({theme}: {theme: DefaultTheme}) => theme.COLORS.BLUE};
`;