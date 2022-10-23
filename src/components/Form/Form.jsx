import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { StyledForm, Label, Input, Button } from './Form.styled';

export const Form = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const inputChangeHandler = evt => {
    switch (evt.currentTarget.name) {
      case 'name':
        setName(evt.currentTarget.value);
        break;
      case 'number':
        setNumber(evt.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const formSubmitHandler = evt => {
    evt.preventDefault();
    onFormSubmit(name, number);
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={formSubmitHandler}>
      <Label htmlFor={nameInputId}>Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={inputChangeHandler}
        id={nameInputId}
      />

      <Label htmlFor={numberInputId}>Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={inputChangeHandler}
        id={numberInputId}
      />
      <Button type="submit">Add contact</Button>
    </StyledForm>
  );
};

Form.propTypes = {
  onFormSubmit: PropTypes.func,
};
