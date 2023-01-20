import { ContactsList } from 'components/ContactsList/ContactsList';
import { Table, Thead, Th } from './Contacts.styled';

export const Contacts = () => (
  <Table>
    <Thead>
      <tr>
        <Th>Name</Th>
        <Th>Number</Th>
        <Th>Rename</Th>
        <Th>Delete</Th>
      </tr>
    </Thead>
    <ContactsList />
  </Table>
);
