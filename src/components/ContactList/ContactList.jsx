import PropTypes from 'prop-types';
import {
  ContactsButton,
  ContactsList,
  ContactsListItem,
  ContactsListText,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactsListItem key={id}>
          {name}: <ContactsListText>{number}</ContactsListText>
          <ContactsButton onClick={() => onDeleteContact(id)}>
            Delate
          </ContactsButton>
        </ContactsListItem>
      ))}
    </ContactsList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onDeleteContact: PropTypes.func,
};
