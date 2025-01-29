import React from "react";
import {Ionicons} from '@expo/vector-icons'
import { useTheme } from "styled-components";

import { Container, InputContainer } from "./styles";
interface InputProps {
    rightIcon?: boolean;
    leftIcon?: boolean;
}

const Input: React.FC<InputProps> = ({rightIcon, leftIcon}) => {
    

    return (
        <Container>
            {leftIcon && (
                <Ionicons
                name="mail-outline"
                size={20}
                color={'#000000'}
                style={{padding: 5, marginLeft: 10}}
                />     
            )}
            <InputContainer />
                {rightIcon && (
                    <Ionicons
                    name="lock-closed-outline"
                    size={20}
                    color={'#000000'}
                    style={{padding: 5, marginRight: 10}}
                    />
                )}
        </Container>
    )
}

export default Input