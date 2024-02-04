import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <>
      <div className={css.span_container}>
        <span className={css.item_span}>{name}:</span>
        <span className={css.item_span}>{number}</span>
        <button
          className={css.item_button}
          type="button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
