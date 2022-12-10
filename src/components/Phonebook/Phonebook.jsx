import React, { Component } from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

export class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  static defaultProps = {
    inputName: [
      {
        name: 'name',
        pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        title:
          "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      },
      {
        name: 'number',
        pattern:
          '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}',
        title:
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
      },
    ],
  };

  onChange = ev => {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { addContact } = this.props;
    addContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={styles.formstyle}>
        <h1 className={styles.title}>Phonebook</h1>
        <form className={styles.bodyform} onSubmit={this.handleSubmit}>
          {this.props.inputName.map(({ name, pattern, title }) => (
            <label className={styles.label} key={name}>
              {name}
              <input
                className={styles.inputItem}
                type="text"
                name={name}
                value={this.state[name]}
                onChange={this.onChange}
                pattern={pattern}
                title={title}
                required
              ></input>
            </label>
          ))}
          <button className={styles.buttonstles} type="submit">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

Phonebook.propTypes = {
  inputName: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      pattern: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),

  addContact: PropTypes.func.isRequired,
};
