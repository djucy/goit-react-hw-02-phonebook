import React from 'react';
import { nanoid } from 'nanoid';
import {
  ContactsList,
  Contact,
  NameContact,
  ButtonDelete,
} from './style/Common.styled';

import PropTypes, { arrayOf } from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ContactsList>
    {contacts.map(({ name, number, id }) => (
      <Contact key={id}>
        <NameContact>{name}:</NameContact>
        <span>{number}</span>
        <ButtonDelete type="button" onClick={() => onDeleteContact(id)}>
          Delete contact
        </ButtonDelete>
      </Contact>
    ))}
  </ContactsList>
);
export default ContactList;
ContactList.propTypes = {
  contacts: arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};
