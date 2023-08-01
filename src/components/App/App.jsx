import ContactsForm from '../ContactsForm/ContactForm';
import css from './App.module.css';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    setContacts(prev => [...prev, newContact]);
  };

  const handleFilterChange = value => {
    setFilter(value);
  };

  const handleDeleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <div className={css.wrapper}>
        <h1 className={css.h1}>Phonebook</h1>
        <ContactsForm AppContacts={contacts} addContact={addContact} />
        <Filter handleFilterChange={handleFilterChange} filter={filter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          handleDeleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
};

export default App;
