import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { Container } from "./styles";

interface DropdownInputProps {
  selectedValue: string | null;
  onValueChange: (value: string | null) => void;
  options: { label: string; value: string }[];
}

const DropdownInput: React.FC<DropdownInputProps> = ({ selectedValue, onValueChange, options }) => {
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
        const newValue = typeof callback === "function" ? callback(selectedValue) : callback;
        onValueChange(newValue);
      }}
      setItems={setItems}
      placeholder="Selecione uma opção"
      style={{ 
        height: 60,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 50,
        paddingHorizontal: 8,
        marginBottom: 20,
        zIndex: 0, 
        elevation: 0,
        position: "absolute"
       }}
      
    />
    </Container>
  );
};

export default DropdownInput;
