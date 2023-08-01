import { Component } from 'react';
import css from './Fiter.module.css';

export class Filter extends Component {
  handleByFilter = e => {
    const value = e.target.value;
    this.props.handleFilterChange(value.trim().toLowerCase());
    // console.log(value);
  };

  render() {
    return (
      <>
        <p>Find contact by name</p>
        <input
          className={css.inputName}
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.handleByFilter}
        />
      </>
    );
  }
}
