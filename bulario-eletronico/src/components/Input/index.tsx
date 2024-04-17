import React, { ChangeEvent } from 'react';

// styles
import { InputStyled } from './input_styled';

interface InputProps {
  searchValue: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ searchValue, handleInputChange }: InputProps) => {
  return (
      <InputStyled
        type="text"
        placeholder="Pesquisar por nome ou empresa..."
        value={searchValue}
        onChange={handleInputChange}
      />
  );
};

export default Input;
