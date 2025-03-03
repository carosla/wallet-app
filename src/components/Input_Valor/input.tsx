import React, { useState } from "react";
import Icon from '@expo/vector-icons/Ionicons'
import { useTheme } from "styled-components";
import { TextInputProps, TouchableOpacity } from "react-native";
import COLORS from "../../styles/theme";

import { Container, InputContainer } from "./styles";
interface InputProps {
}

const InputValor: React.FC<InputProps & TextInputProps> = ({
}: InputProps) => {

    const [isFocused, setIsFocused] = useState(false);


    return (
        <Container>
            <InputContainer 
                placeholderTextColor={COLORS.COLORS.GRAY3}
            /> 
        </Container>
    )
}

export default InputValor