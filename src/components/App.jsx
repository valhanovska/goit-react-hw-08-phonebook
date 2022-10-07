import Form from '../components/Form';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

import s from './App.module.css';

export function App() {
  return (
    <div className={s.container}>
      <div>
        <h1>Phonebook</h1>
        <Form />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}
