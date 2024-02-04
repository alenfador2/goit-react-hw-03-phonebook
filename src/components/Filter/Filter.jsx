import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const findNameInputId = nanoid();

function Filter({ filter, onFilter }) {
  return (
    <>
      <label htmlFor={findNameInputId} className={css.filter_label}>
        Find contacts by name
      </label>
      <input
        type="text"
        id={findNameInputId}
        onChange={onFilter}
        value={filter}
        className={css.filter_input}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
