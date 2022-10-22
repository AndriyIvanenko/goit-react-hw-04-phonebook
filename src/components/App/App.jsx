import React from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/Form/Form';
import { Contacts } from '../Contacts/Contacts';
import { Section, H1, H2 } from './App.styled';
import Filter from 'components/Search/Filter';

class PhoneBook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts && storedContacts.length > 0) {
      this.setState({ contacts: storedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.concats) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = data => {
    if (this.state.contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    const newContact = [{}];
    newContact[0].id = nanoid();
    newContact[0].name = data.name;
    newContact[0].number = data.number;
    const updatedContacts = this.state.contacts.concat(newContact);
    this.setState({ contacts: updatedContacts });
  };

  filterChangeHandler = data => {
    this.setState({ filter: data });
  };

  deleteContact = data => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== data
    );
    this.setState({ contacts: updatedContacts });
  };

  filterInputId = nanoid();

  render() {
    return (
      <Section>
        <H1>Phonebook</H1>
        <Form onFormSubmit={this.formSubmitHandler}></Form>
        <H2>Contacts</H2>
        <Filter onFilterChange={this.filterChangeHandler}></Filter>
        <Contacts
          deleteContact={this.deleteContact}
          contacts={this.state.contacts}
          filter={this.state.filter}
        ></Contacts>
      </Section>
    );
  }
}

export default PhoneBook;
