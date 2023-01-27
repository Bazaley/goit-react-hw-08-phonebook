import { useState } from 'react';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Section } from 'components/Section/Section';
import Particle from 'components/Particle/Particle';
import { Filter } from 'components/Filter/Filter';
import { List } from './Contacts.styled';
import UpdateContact from 'components/UpdateContact/UpdateContact';

const Contacts = () => {
  const [contact, setContact] = useState(null);

  return (
    <>
      <Section title="All your contacts are located here!">
        <>
          <Filter />
          <List>
            <ContactsList setContact={setContact} />
          </List>
          {contact && (
            <UpdateContact contact={contact} setContact={setContact} />
          )}
        </>
      </Section>
      <Particle />
    </>
  );
};

export default Contacts;
