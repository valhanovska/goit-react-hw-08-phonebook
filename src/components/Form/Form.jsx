import { nanoid } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getEditContact } from 'redux/selectors';
import {
  addContact,
  editContact as editContactOperation,
} from 'redux/operations';

import s from './Form.module.css';

function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(getContacts);
  const editContact = useSelector(getEditContact);

  useEffect(() => {
    if (editContact) {
      const { name, number } = editContact;
      setName(name);
      setPhone(number);
    }
  }, [editContact]);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setPhone('');
    setName('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const filterName = name;

    if (contacts.find(({ name }) => name.toLowerCase() === filterName)) {
      alert(`${contacts.name} is already in contacts`);
      return;
    }
    if (!editContact) {
      dispatch(addContact({ name, phone, id: nanoid() }));
      reset();
    } else {
      dispatch(editContactOperation({ name, phone, id: editContact.id }));
      reset();
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default Form;
