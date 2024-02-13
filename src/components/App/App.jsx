import ContactForm from 'components/ContactForm';
import Container from 'components/Container';
import Search from 'components/Search';
import Section from 'components/Section';
import { filterList } from 'utils/filterList';
import { MainHeading } from './App.styled';
import ContactList from 'components/ContactList';
import Notification from 'components/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { createContact } from '../../redux/contacts/slice';

const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const contacts = useSelector(getContacts);

  const addContact = contact => {
    const hasContact = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (hasContact) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    dispatch(createContact(contact));
  };

  const filteredContacts = filterList('name', contacts, filter);

  return (
    <div>
      <Container>
        <MainHeading>Phonebook</MainHeading>
        <Section>
          <ContactForm addContact={addContact} />
        </Section>
      </Container>

      <Container>
        <Section title="Contacts">
          {contacts.length !== 0 && <Search />}

          {contacts.length !== 0 ? (
            <ContactList contacts={filteredContacts} />
          ) : (
            <Notification message="No contacts" />
          )}
        </Section>
      </Container>
    </div>
  );
};

export default App;
