import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Form } from 'components/Form/Form';
import { Contacts } from '../Contacts/Contacts';
import { Section, H1, H2 } from './App.styled';
import { Filter } from 'components/Filter/Filter';

export function PhoneBook() {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts && storedContacts.length > 0) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = [{}];
    newContact[0].id = nanoid();
    newContact[0].name = name;
    newContact[0].number = number;
    const updatedContacts = contacts.concat(newContact);
    setContacts(updatedContacts);
  };

  const filterChangeHandler = data => {
    setFilter(data);
  };

  const deleteContact = data => {
    const updatedContacts = contacts.filter(contact => contact.id !== data);
    setContacts(updatedContacts);
  };

  return (
    <Section>
      <H1>Phonebook</H1>
      <Form onFormSubmit={formSubmitHandler}></Form>
      <H2>Contacts</H2>
      <Filter onFilterChange={filterChangeHandler}></Filter>
      <Contacts
        deleteContact={deleteContact}
        contacts={contacts}
        filter={filter}
      ></Contacts>
    </Section>
  );
}
