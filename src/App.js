import { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Phonebook from './components/Phonebook';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import initialTodos from './todos.json';

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
    //  if (
    //     this.state.contacts.some(
    //       item => item.name.toLowerCase() === normalizeName,
    //     )
    //   ) {
    //     toast(`${contact.name} is already in your contacts`);
    //     return;
    //   }
    //   this.setState(({ contacts }) => ({
    //     contacts: [contact, ...contacts],
    //     filter: '',
    //   }));
    // };
    if (this.state.contacts.find(user => user.name === contact.name)) {
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
  // nameInputId = this.name.nanoid();
  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.findContact();
    return (
      <div>
        <h1>Phonebook</h1>
        <Phonebook onSubmit={this.addContact}></Phonebook>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}></Filter>
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}

export default App;
