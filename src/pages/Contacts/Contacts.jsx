import { ContactsList } from 'components/ContactsList/ContactsList';
import { Section } from 'components/Section/Section';
import Particle from 'components/Particle/Particle';
import { Filter } from 'components/Filter/Filter';
import { List } from './Contacts.styled';

const Contacts = () => {
  return (
    <>
      <Section title="All your contacts are located here!">
        <>
          <Filter />
          <List>
            <ContactsList />
          </List>
        </>
      </Section>
      <Particle />
    </>
  );
};

export default Contacts;
