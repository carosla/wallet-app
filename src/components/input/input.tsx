import React, {
    forwardRef,
    useCallback,
    useState,
    useImperativeHandle,
    useRef,
    useEffect,
} from 'react';

import { useTheme } from 'styled-components';
import { useField } from "@unform/core";
import {Ionicons} from "@expo/vector-icons";
import { Text, TextInputProps } from 'react-native';

interface InputRef{
    focus(): void;
}

interface InputValueReference{
    Value: string;
}

interface InputProps extends TextInputProps{
    name: string;
    value?: string;
    iconName?: React.ComponentProps<typeof Ionicons>["name"]
    containerStyle?: {[key: string]: string | number}
}

import { Container, IConContainer, InputText } from './styles';

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({
    iconName,
    name,
    value,
    containerStyle,
    ...rest
}) => {
    const theme = useTheme;

    const [hasErrors, setHasErrors] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsfilled] = useState(false);

    return (
        <Container style={containerStyle}>
            <IConContainer
            isFilled={isFilled}
            hasErrors={hasErrors}>
            </IConContainer>
        </Container>
    )
}

export {Input};
