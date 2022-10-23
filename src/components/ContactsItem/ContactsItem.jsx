import PropTypes from 'prop-types';
import { Contact, Button, Name } from './ContactsItem.styled';

export const ContactsItem = ({ contact, throwDeleteId }) => {
  function setDeleteId() {
    throwDeleteId(contact.id);
  }

  return (
    <Contact>
      <Name>{contact.name}:</Name>
      <span>{contact.number}</span>
      <Button type="button" onClick={setDeleteId}>
        delete
      </Button>
    </Contact>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.object,
  throwDeleteId: PropTypes.func,
};
