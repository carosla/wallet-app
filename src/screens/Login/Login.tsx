import React from "react";

import { SafeAreaView, Text } from "react-native";

import { ButtonSocialGoogle } from "../../components/ButtonSocialGoogle/ButtonSocialGoogle";
import {
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton
} from "./styles";

const Login: React.FC = () => {
    return (
        <SafeAreaView>
            <Container>
                <ContentHeader>
                    <Title>Seja bem vindo(a) {'\n'} a App Carteira</Title>

                    <Description>Entrar com redes sociais</Description>

                    <ViewButton>

                        <ButtonSocialGoogle title="Google"/>
                        <ButtonSocialGoogle title="Google"/>

                    </ViewButton>
                </ContentHeader>

                <ContentBody>

                </ContentBody>

                <ContentFooter>

                </ContentFooter>
            </Container>
        </SafeAreaView>
    );
}

export { Login };