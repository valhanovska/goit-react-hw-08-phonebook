import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

// import { addContact } from 'redux/slice';

import s from './Form.module.css';

function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(getContacts);

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
    dispatch(addContact({ name, phone, id: nanoid() }));
    reset();
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
