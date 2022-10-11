import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getEditContact } from 'redux/Contacts/selectors';
import {
  addContact,
  editContact as editContactOperation,
} from 'redux/Contacts/operations';

// import { addContact } from 'redux/slice';

import s from './Form.module.css';
import { useEffect } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const editContact = useSelector(getEditContact);
  useEffect(() => {
    if (editContact) {
      const { name, number } = editContact;
      setName(name);
      setNumber(number);
    }
  }, [editContact]);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setNumber('');
    setName('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const filterName = name;
    const normFilterName = filterName.toLowerCase();
    if (
      contacts.find(({ name }) => name.toLowerCase() === normFilterName) ||
      (editContact &&
        contacts.find(({ name }) => name.toLowerCase() === normFilterName))
    ) {
      alert(`${filterName} is already in contacts`);
      return;
    } else {
      !editContact
        ? dispatch(addContact({ name, number, id: nanoid() })) && reset()
        : dispatch(
            editContactOperation({ name, number, id: editContact.id })
          ) && reset();
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.inputform}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          id="name"
        />
      </div>
      <div className={s.inputform}>
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          id="number"
        />
      </div>

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default Form;
