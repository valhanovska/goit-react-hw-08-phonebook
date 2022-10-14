import Form from '../../components/Form';
import ContactList from './ContactList';
import Filter from '../../components/Filter';

import s from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/Contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/Contacts/operations';

function ContactsPage() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={s.wrapper}>
      <h1 className={s.text}>Phonebook</h1>
      <div className={s.container}>
        <div>
          <h2>Add new contacts</h2>

          <Form />
        </div>
        <div>
          {contacts.length !== 0 && <h2>Contacts</h2>}

          <Filter />
          <ContactList />
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;
