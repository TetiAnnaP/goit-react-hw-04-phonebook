import css from './Fiter.module.css';

const Filter = ({ filter, handleFilterChange }) => {
  const handleByFilter = e => {
    const value = e.target.value;
    handleFilterChange(value.trim().toLowerCase());
    console.log(filter);
  };

  return (
    <>
      <p>Find contact by name</p>
      <input
        className={css.inputName}
        type="text"
        name="filter"
        value={filter}
        onChange={handleByFilter}
      />
    </>
  );
};

export default Filter;
