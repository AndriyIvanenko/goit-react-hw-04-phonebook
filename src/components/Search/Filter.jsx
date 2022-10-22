import React from 'react';
import { nanoid } from 'nanoid';
import { FilterSection, Label, Input } from './Filter.styled';

class Filter extends React.Component {
  state = {
    filter: '',
  };

  filterChangeHandler = evt => {
    const value = evt.currentTarget.value;
    this.setState({ filter: value });
    this.props.onFilterChange(value);
  };

  filterInputId = nanoid();

  render() {
    return (
      <FilterSection>
        <Label htmlFor={this.filterInputId}>Find contacts by name</Label>
        <Input
          type="text"
          name="filter"
          id={this.filterInputId}
          value={this.state.filter}
          onChange={this.filterChangeHandler}
        />
      </FilterSection>
    );
  }
}

export default Filter;
