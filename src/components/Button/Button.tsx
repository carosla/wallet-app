import {View, Text} from 'react-native'
import React from 'react'

import { Container, Title } from './style';

interface IButtonProps {
    title: string;
    onPress: () => void;
}

export const Button = ({title, onPress = () => {}}: IButtonProps) => {
    return (
        <Container onPress={onPress}>
            <Title>{title}</Title>
        </Container>
    )
}
