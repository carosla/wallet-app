import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { limited_transaction } from "../../../utils/limited_transactions";

import Tranfer from '../../../assets/convert.png';
import Payments from '../../../assets/export.png';
import PayOut from '../../../assets/money-send.png'
import TopUp from '../../../assets/add-circle.png';
import EllipseOnePng from '../../../assets/ellipse1.png';
import EllipseTwoPng from '../../../assets/ellipse2.png';

import {
    Container,
    Content,
    ViewContainer,
    ViewBalanceLeft,
    ViewBalanceRight,
    TitleValor,
    TitleValorConta,
    TitleCartao,
    TitleNomeCartao,
    Body,
    IconPayment,
    IconTransfer,
    IconPayOut,
    IconTopUp,
    TitleTransfer,
    TitlePayments,
    TitlePayOut,
    TitleTopUp,
    Footer,
    ContentFlat,
    ContentFlatHeader,
    Title,
    ButtonVerTotos,
    ButtonTitleVertotos,
    IconTransaction,
    DetailsTransaction,
    NameTransaction,
    SubtTitleTransaction,
    AmountTransaction,
    EllipseOne,
    EllipseTwo,
} from './styles'
import { Header } from '../../../components/Header/Header'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { transaction } from '@src/utils/transaction';


export const Carteira = () => {
    const navigation = useNavigation();

    const hadleGoTransaction = () => {
        navigation.navigate('Transaction')
    }
    return (
        <Container>
            <Header
                textLeft
                avatarRight
                appName='Wallet'
            />

            <ViewContainer>
                <Content>
                    <EllipseOne source={EllipseOnePng} />
                    <ViewBalanceLeft>
                        <TitleValor>Valor Total</TitleValor>
                        <TitleValorConta>R$ 1.000,00</TitleValorConta>
                    </ViewBalanceLeft>

                    <ViewBalanceRight>
                        <TitleCartao>Cartão</TitleCartao>
                        <TitleNomeCartao>Wallet</TitleNomeCartao>
                    </ViewBalanceRight>
                    <EllipseTwo source={EllipseTwoPng} />
                </Content>

                <Body>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <IconPayment source={Payments} />
                        <TitlePayments>Recebtos</TitlePayments>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Transacao')}
                        style={{ alignItems: 'center' }}>
                        <IconPayOut source={PayOut} />
                        <TitlePayOut>Pagtos</TitlePayOut>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DetailsCard')}
                        style={{ alignItems: 'center' }}
                    >
                        <IconTopUp source={TopUp} />
                        <TitleTopUp>+ Opções</TitleTopUp>
                    </TouchableOpacity>
                </Body>
            </ViewContainer>

            <Footer>
                <FlatList
                    data={limited_transaction}
                    renderItem={({ item }) => (
                        <ContentFlat>
                            <IconTransaction
                                source={item.icon}
                            />

                            <DetailsTransaction>
                                <NameTransaction>{item.title}</NameTransaction>
                                <SubtTitleTransaction>{item.subtitle}</SubtTitleTransaction>
                            </DetailsTransaction>

                            <AmountTransaction>R$ {item.price}</AmountTransaction>
                        </ContentFlat>
                    )}
                    ListHeaderComponent={
                        <ContentFlatHeader>
                            <Title>Minhas Transações</Title>
                            <ButtonVerTotos onPress={hadleGoTransaction}>
                                <ButtonTitleVertotos>Ver Todos</ButtonTitleVertotos>
                            </ButtonVerTotos>
                        </ContentFlatHeader>
                    }
                    showsVerticalScrollIndicator={false}
                />
            </Footer>
        </Container>
    )
}