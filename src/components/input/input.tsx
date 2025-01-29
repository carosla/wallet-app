import React from "react";
import {Ionicons} from '@expo/vector-icons'
import { useTheme } from "styled-components";
import { TextInputProps } from "react-native";

import { Container, InputContainer } from "./styles";
interface InputProps {
    rightIcon?: boolean;
    leftIcon?: boolean;
    iconName: string;
    iconSize?: number;
    iconColor?: string;
}

const Input: React.FC<InputProps & TextInputProps> = ({rightIcon, leftIcon, iconName, iconSize, iconColor, ...rest}) => {
    

    return (
        <Container>
            {leftIcon && (
                <Ionicons
                name={iconName}
                size={iconSize}
                color={iconColor || '#000000'}
                style={{padding: 5}}
                />     
            )}
            <InputContainer 
                {...rest}
                placeholderTextColor={'#828282'}
            />
                {rightIcon && (
                    <Ionicons
                    name={iconName}
                    size={iconSize}
                    color={iconColor || '#000000'}
                    style={{padding: 5}}
                    />
                )}
        </Container>
    )
}

export default Input