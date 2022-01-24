import { Component } from 'react';

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
      <form onSubmit={this.onFormSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.onNameInput}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.onNumberInput}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Phonebook;
