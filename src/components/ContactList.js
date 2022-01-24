import React from 'react';
import { nanoid } from 'nanoid';
import {
  ContactsList,
  Contact,
  NameContact,
  ButtonDelete,
} from './style/Common.styled';

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
