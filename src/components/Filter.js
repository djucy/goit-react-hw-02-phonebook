import React from 'react';
import { FilterContainer, Label, Input } from './style/Common.styled';
import PropTypes from 'prop-types';

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
Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
export default Filter;
