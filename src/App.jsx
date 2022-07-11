import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from 'styles/Box';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandle = ({ name, number }) => {
    const contact = {
      id: nanoid(6),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = evt => {
    const { value } = evt.currentTarget;
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLowerCase();

    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="60%"
        p="ml"
        m="10px auto"
        border="1px solid"
        borderRadius="normal"
        backgroundColor="accentColorBlue"
      >
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.formSubmitHandle} />

        <h2>Contacts</h2>

        <Filter value={filter} onFilter={this.changeFilter} />

        <ContactList
          contacts={filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </Box>
    );
  }
}
