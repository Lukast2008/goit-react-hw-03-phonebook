import styles from '../Phonebook/styles.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contact, contactDelete }) => {
  return (
    <ul className={styles.list}>
      {contact.map(el => (
        <li className={styles.listItem} id={el.id} key={el.id}>
          {el.name}: {el.number}
          <button
            className={styles.listButton}
            type="button"
            onClick={() => contactDelete(el.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
