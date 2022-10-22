import React from 'react';
import { nanoid } from 'nanoid';
import { StyledForm, Label, Input, Button } from './Form.styled';

class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  inputChangeHandler = evt => {
    const { name, number, value } = evt.currentTarget;
    this.setState({ [name]: value, [number]: value });
  };

  formSubmitHandler = evt => {
    evt.preventDefault();
    this.props.onFormSubmit(this.state);
    this.formReset();
  };

  formReset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <StyledForm onSubmit={this.formSubmitHandler}>
        <Label htmlFor={this.nameInputId}>Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.inputChangeHandler}
          id={this.nameInputId}
        />

        <Label htmlFor={this.numberInputId}>Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.inputChangeHandler}
          id={this.numberInputId}
        />
        <Button type="submit">Add contact</Button>
      </StyledForm>
    );
  }
}

export default Form;
