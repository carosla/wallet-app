import React from "react";

import { SafeAreaView, Text } from "react-native";

import { Input } from ".././../components/input/input";

import { ButtonSocialGoogle } from "../../components/ButtonSocialGoogle/ButtonSocialGoogle";
import { ButtonSocial } from "../../components/ButtonSocial/ButtonSocial";
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
                        <ButtonSocial IconName="facebook" title="Facebook"/>

                    </ViewButton>
                </ContentHeader>

                <ContentBody>
                    <Input/>
                </ContentBody>

                <ContentFooter>

                </ContentFooter>
            </Container>
        </SafeAreaView>
    );
}

export { Login };