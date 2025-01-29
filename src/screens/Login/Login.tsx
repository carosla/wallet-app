import React from "react";

import { SafeAreaView, Text } from "react-native";

import Input from "../../components/Input/input";
import { Button } from "../../components/Button";
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
import COLORS from "../../styles/theme";

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
                    <Input 
                        leftIcon 
                        iconSize={25} 
                        iconName="mail-outline" 
                        placeholder="Digite seu e-mail"
                    />
                    <Input 
                        leftIcon  
                        iconSize={25}
                        iconName="lock-closed-outline"
                        placeholder="Digite sua senha"
                    />

                    <Button 
                        title="Entrar"
                        onPress={() => {}}
                    />
                </ContentBody>

                <ContentFooter>

                </ContentFooter>
            </Container>
        </SafeAreaView>
    );
}

export { Login };