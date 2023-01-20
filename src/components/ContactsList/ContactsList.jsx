import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilterContact,
  selectContacts,
  selectRenameContact,
} from 'redux/selectors';
import { deleteContact } from 'redux/contacts/operations';

import { Tr, Td, Button } from './ContactsList.styled';
import UpdateContact from '../UpdateContact/UpdateContact';
import { renameContact } from 'redux/contacts/contactsSlice';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterContact);
  const contact = useSelector(selectRenameContact);

  const dispatch = useDispatch();

  return (
    <tbody>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => {
          return (
            <Tr key={id}>
              <Td>{contact?.name === name ? <UpdateContact /> : name}</Td>
              <Td>{number}</Td>
              <Td>
                <Button
                  rename
                  onClick={() => dispatch(renameContact({ id, name, number }))}
                >
                  rename
                </Button>
              </Td>
              <Td>
                <Button onClick={() => dispatch(deleteContact(id))}>
                  delete
                </Button>
              </Td>
            </Tr>
          );
        })}
    </tbody>
  );
};
