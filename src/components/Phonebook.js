import { Component } from 'react';
import { PhonebookForm, Label, Input, Button } from './style/Common.styled';

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };
  onNameInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onNumberInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // onNameInput = e => {
  //     this.setState({ name: e.currentTarget.value });
  // }
  // onNumberInput = e => {
  //     this.setState({ number: e.currentTarget.value });
  // }
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    // this.props.onSubmit(this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <PhonebookForm onSubmit={this.onFormSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.onNameInput}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.onNumberInput}
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </PhonebookForm>
    );
  }
}

export default Phonebook;
