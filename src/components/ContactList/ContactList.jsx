import { nanoid } from 'nanoid';
import css from './ContactList.module.css';
import { useEffect, useState } from 'react';

const ContactList = ({ handleDeleteContact, filter, contacts }) => {
  const [visibleContacts, setVisibleContacts] = useState([]);

  const handleDeleteBtn = e => {
    handleDeleteContact(e.target.id);
  };

  useEffect(() => {
    localStorage.setItem('userContacts', JSON.stringify(contacts));

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    setVisibleContacts(filteredContacts);
  }, [contacts, filter]);

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
              onClick={handleDeleteBtn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
