import React from 'react';
import { FilterContainer, Label, Input } from './style/Common.styled';

const Filter = ({ value, onChange }) => (
  <FilterContainer>
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={onChange}
      />
    </Label>
  </FilterContainer>
);

export default Filter;
