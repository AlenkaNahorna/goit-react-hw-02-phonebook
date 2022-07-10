import React, { Component } from 'react';
import { Box } from 'styles/Box';
import { ContactForm } from 'components/ContactForm/ContactForm';

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

  formSubmitHandle = data => {
    console.log(data);
  };

  render() {
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
      </Box>
    );
  }
}