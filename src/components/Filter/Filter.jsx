import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FilterSection, Label, Input } from './Filter.styled';

export const Filter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState('');

  const filterChangeHandler = evt => {
    const value = evt.currentTarget.value;
    setFilter(value);
    onFilterChange(value);
  };

  const filterInputId = nanoid();

  return (
    <FilterSection>
      <Label htmlFor={filterInputId}>Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        id={filterInputId}
        value={filter}
        onChange={filterChangeHandler}
      />
    </FilterSection>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func,
};
