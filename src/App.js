import { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Phonebook from './components/Phonebook';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import initialTodos from './todos.json';
import {
  Container,
  Title,
  SecondaryTitle,
} from './components/style/Common.styled';

class App extends Component {
  state = {
    contacts: initialTodos,
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const userName = this.state.contacts.find(
      user => user.name === contact.name,
    );

    if (userName) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  findContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.findContact();
    return (
      <Container>
        <Title>Phonebook</Title>
        <Phonebook onSubmit={this.addContact}></Phonebook>
        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter value={filter} onChange={this.changeFilter}></Filter>
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        ></ContactList>
      </Container>
    );
  }
}

export default App;
