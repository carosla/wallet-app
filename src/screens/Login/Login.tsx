import React from "react";

import { Pressable, SafeAreaView, Text } from "react-native";

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
    ViewButton,
    ButtonSignUp,
    TitleButtonSignUp1,
    TitleButtonSignUp2
} from "./styles";
import COLORS from "../../styles/theme";
import { ButtonPersonalizado } from "@src/components/ButtonPersonalizado";

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
                        secureTextEntry={false}
                        autoCorrect={false}
                        keyboardType="default"
                        autoCapitalize="none"
                        iconName="mail-outline" 
                        placeholder="Digite seu e-mail"
                    />
                    <Input 
                        leftIcon  
                        rightIcon
                        iconSize={25}
                        secureTextEntry
                        autoCorrect={false}
                        keyboardType="default"
                        autoCapitalize="none"
                        iconName="lock-closed-outline"
                        placeholder="Digite sua senha"
                    />

                    <ButtonPersonalizado
                        title="Entrar"
                        variant="primary"
                        onPress={() => {}}
                        style={{ marginBottom: 20 }}
                    />
                </ContentBody>

                <ContentFooter>
                    <ButtonSignUp>
                        <TitleButtonSignUp1>Não tem cadastro ainda?</TitleButtonSignUp1>
                        <TitleButtonSignUp2>Cadastre-se</TitleButtonSignUp2>
                    </ButtonSignUp>
                </ContentFooter>
            </Container>
        </SafeAreaView>
    );
}

export { Login };