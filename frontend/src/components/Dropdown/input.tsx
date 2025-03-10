import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { Container } from "./styles";
import COLORS from "../../styles/theme";

interface DropdownInputProps {
  selectedValue: string | null;
  onValueChange: (value: string | null) => void;
  options: { label: string; value: string }[];
}

const DropdownInput: React.FC<DropdownInputProps> = ({
  selectedValue,
  onValueChange,
  options,
}) => {
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState(options);

  return (
    <Container>
      <DropDownPicker
        open={open}
        value={selectedValue}
        items={items}
        setOpen={setOpen}
        setValue={(callback) => {
          const newValue =
            typeof callback === "function" ? callback(selectedValue) : callback;
          onValueChange(newValue);
        }}
        setItems={setItems}
        placeholder="Selecione uma opção"
        style={{
          height: 50,
          borderColor: "black",
          borderWidth: 0,
          borderRadius: 50,
          paddingHorizontal: 8,
          marginBottom: 20,
          zIndex: 0,
          elevation: 6,
          // Sombra para iOS
          shadowColor: COLORS.COLORS.PURPLEDARK1,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
        }}
      />
    </Container>
  );
};

export default DropdownInput;
