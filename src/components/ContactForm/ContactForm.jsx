import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const usernameInputId = nanoid();
const usertelInputId = nanoid();

class ContactForm extends Component {
  initialValues = {
    name: '',
    number: '',
  };

  handleFormSubmit = ({ name, number }, { resetForm }) => {
    const { contacts } = this.props;
    const numberAlreadyExist = contacts.some(contact =>
      contact.name.includes(name)
    );

    if (numberAlreadyExist) {
      alert(`${name} is already exist!`);
      resetForm();
    } else {
      this.props.onSubmit({ id: nanoid(), name, number });
      resetForm();
    }
  };

  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        onSubmit={this.handleFormSubmit}
      >
        <Form>
          <div className={css.contact_container}>
            <label htmlFor={usernameInputId} className={css.username_label}>
              Name
            </label>
            <Field
              type="text"
              name="name"
              id={usernameInputId}
              className={css.username_input}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Please write username"
              required
            />
            <label htmlFor={usertelInputId} className={css.usertel_label}>
              Number
            </label>
            <Field
              type="tel"
              name="number"
              id={usertelInputId}
              className={css.usertel_input}
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="Please write number"
              required
            />
            <button type="submit" className={css.add_button}>
              Add contact
            </button>
          </div>
        </Form>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactForm;
