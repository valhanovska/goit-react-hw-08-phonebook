import ContactItem from '../ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/Contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/Contacts/operations';

import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(fetchContacts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const lowerCaseContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.trim())
  );

  return (
    <>
      {lowerCaseContact.length > 0 && (
        <ul className={s.list}>
          {lowerCaseContact.map(({ id, name, number }) => (
            <ContactItem key={id} name={name} number={number} id={id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
