import PropTypes from 'prop-types';
import { Li } from './Contacts.styled';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';

export const Contacts = ({ contacts, filter, deleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  function throwDeleteId(data) {
    deleteContact(data);
  }

  return (
    <ul>
      {filteredContacts.map(contact => (
        <Li key={contact.id}>
          <ContactsItem
            contact={contact}
            throwDeleteId={throwDeleteId}
          ></ContactsItem>
        </Li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
};
