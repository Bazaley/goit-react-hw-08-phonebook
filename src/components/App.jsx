import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Notification } from './Notification/Notification';
import Form from './Form/Form';
import { fetchContacts } from 'redux/contacts/operations';

import RegisterForm from './RegisterForm/RegisterForm';

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <RegisterForm />
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        {contacts.length ? (
          <>
            <Filter />
            <Contacts />
          </>
        ) : (
          <Notification message="There are no entries in the phone book" />
        )}
      </Section>
    </>
  );
};

export default App;
