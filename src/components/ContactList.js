import React from 'react';
import { nanoid } from 'nanoid';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <li key={id}>
        <span>{name}</span>
        <span>{number}</span>
        <button type="button" onClick={() => onDeleteContact(id)}>
          Delete contact
        </button>
      </li>
    ))}
  </ul>
);
export default ContactList;
