import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilterContact,
  selectContacts,
  selectRenameContact,
} from 'redux/selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';

import UpdateContact from '../UpdateContact/UpdateContact';
import { renameContact } from 'redux/contacts/contactsSlice';
import {
  Button,
  Item,
  ImCrossStyled,
  GrUpdateStyled,
} from './ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterContact);
  const contact = useSelector(selectRenameContact);

  const dispatch = useDispatch();

  return (
    <>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <p>{contact?.name === name ? <UpdateContact /> : name}</p>
              <p>{number}</p>

              <Button
                rename
                onClick={() => dispatch(renameContact({ id, name, number }))}
              >
                <GrUpdateStyled size={'20px'} />
              </Button>
              <Button onClick={() => dispatch(deleteContact(id))}>
                <ImCrossStyled size={'20px'} />
              </Button>
            </Item>
          );
        })}
    </>
  );
};
