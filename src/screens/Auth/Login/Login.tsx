import React from "react";

import { KeyboardAvoidingView, Pressable, SafeAreaView, Text } from "react-native";

import Input from "../../../components/Input/input";
import { Button } from "../../../components/Button";
import { ButtonSocialGoogle } from "../../../components/ButtonSocialGoogle/ButtonSocialGoogle";
import { ButtonSocial } from "../../../components/ButtonSocial/ButtonSocial";
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
    TitleButtonSignUp2,
    ContentForgotPassword,
    ContentButtonForgotPassword,
    ContentTitleForgotPassword
} from "./styles";
import COLORS from "../../../styles/theme";
import { ButtonPersonalizado } from "@src/components/ButtonPersonalizado";
import { useNavigation } from "@react-navigation/native";

const Login: React.FC = () => {
    const navigation = useNavigation()

    const handleCadastro = () => {
        navigation.navigate('Cadastro');
    }
    return (
            <KeyboardAvoidingView
                behavior="position"
                enabled
            >
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

                    <ContentForgotPassword>
                        <ContentButtonForgotPassword>
                            <ContentTitleForgotPassword>Recuperar Senha</ContentTitleForgotPassword>
                        </ContentButtonForgotPassword>
                        {/* <ButtonPersonalizado
                            title="Recuperar Senha"
                            onPress={() => {}}
                            variant='transparent'
                        /> */}
                    </ContentForgotPassword>

                    <ButtonPersonalizado
                        title="Entrar"
                        variant="primary"
                        onPress={() => {}}
                        style={{ marginBottom: 20 }}
                    />
                </ContentBody>

                <ContentFooter>
                    <ButtonSignUp onPress={handleCadastro}>
                        <TitleButtonSignUp1>Não tem cadastro ainda?</TitleButtonSignUp1>
                        <TitleButtonSignUp2>Cadastre-se</TitleButtonSignUp2>
                    </ButtonSignUp>
                </ContentFooter>
            </Container>
        </KeyboardAvoidingView>
    );
}

export { Login };