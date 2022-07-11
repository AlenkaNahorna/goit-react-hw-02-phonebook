import React, { Component } from 'react';
import { Notify } from 'notiflix';
import { nanoid } from 'nanoid';
import { Box } from 'styles/Box';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Titles, SubTitles } from 'components/Titles/Titles';

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
    const newContact = {
      id: nanoid(6),
      name,
      number,
    };
    this.setState(({ contacts }) =>
      contacts.find(contact => contact.name === newContact.name)
        ? Notify.info(`${newContact.name} is already in contacts`)
        : { contacts: [newContact, ...contacts] }
    );
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
        p="ml"
        m="0px auto"
        backgroundColor="secondaryColorBlue"
      >
        <Titles />

        <ContactForm onSubmit={this.formSubmitHandle} />

        <SubTitles />

        <Filter value={filter} onFilter={this.changeFilter} />

        <ContactList
          contacts={filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </Box>
    );
  }
}
