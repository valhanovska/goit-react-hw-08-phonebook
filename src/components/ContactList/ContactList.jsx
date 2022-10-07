import ContactItem from '../ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

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
        <ul>
          {lowerCaseContact.map(({ id, name, phone }) => (
            <ContactItem key={id} name={name} number={phone} id={id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
