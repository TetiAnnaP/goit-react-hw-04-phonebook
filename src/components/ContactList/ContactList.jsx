import { nanoid } from 'nanoid';
import css from './ContactList.module.css';
import { Component } from 'react';

export class ContactList extends Component {
  handleDeleteBtn = e => {
    this.props.handleDeleteContact(e.target.id);
  };

  componentDidMount() {
    localStorage.setItem('userContacts', JSON.stringify(this.props.contacts));
  }

  componentDidUpdate() {
    localStorage.setItem('userContacts', JSON.stringify(this.props.contacts));
  }

  render() {
    const visibleContacts = this.props.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.props.filter)
    );

    return (
      <ul className={css.ul}>
        {visibleContacts.map(contact => {
          return (
            <li className={css.li} key={nanoid()}>
              <p className={css.text}>
                {contact.name}: {contact.number}
              </p>
              <button
                className={css.sbmBtn}
                type="button"
                id={contact.id}
                onClick={this.handleDeleteBtn}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
