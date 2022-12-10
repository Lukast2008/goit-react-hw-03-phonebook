import styles from '../Phonebook/styles.module.css';
import PropTypes from 'prop-types';

// import { onChange }

export const FilterContacts = ({ filter, onChange }) => {
  return (
    <form className={styles.bodyform}>
      <label className={styles.label}>
        find contact by name
        <input
          className={styles.inputItemFind}
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </label>
    </form>
  );
};

FilterContacts.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
