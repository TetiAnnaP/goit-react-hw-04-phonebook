import { nanoid } from 'nanoid';
import { Component } from 'react';
import css from './ContactsForm.module.css';

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handleChangeNumber = e => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const contactsList = this.props.stateApp.contacts;
    const nameExists = contactsList.some(
      contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
    );
    if (nameExists) {
      alert('This name already exists in the phonebook!');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.addContact(newContact);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label className={css.label}>
            Name
            <input
              className={css.inputName}
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              required
              onChange={this.handleChangeName}
            />{' '}
          </label>

          <label className={css.label}>
            Number
            <input
              className={css.inputName}
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={this.state.number}
              required
              onChange={this.handleChangeNumber}
            />
          </label>
          <button className={css.sbmBtn} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}
