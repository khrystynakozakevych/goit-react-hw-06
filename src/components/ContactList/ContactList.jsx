import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.contacts_wrapper}>
      {filteredContacts.length === 0 ? (
        <p>No contacts found</p>
      ) : (
        <ul className={css.contacts_list}>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              <Contact contact={contact} onDelete={handleDelete} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
