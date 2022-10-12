import Form from '../../components/Form';
import ContactList from './ContactList';
import Filter from '../../components/Filter';

import s from './Contacts.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/Contacts/selectors';

function ContactsPage() {
  const contacts = useSelector(getContacts);

  return (
    <div>
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
