import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilterContact,
  selectContacts,
  selectRenameContact,
} from 'redux/selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { Avatar } from '@mui/material';
import UpdateContact from '../UpdateContact/UpdateContact';
import { renameContact } from 'redux/contacts/contactsSlice';
import {
  Button,
  Item,
  ImCrossStyled,
  GrUpdateStyled,
  Paragraph,
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
              <Avatar
                sx={{
                  bgcolor: '#2e6ee7',
                }}
              >
                {name[0].toUpperCase()}
              </Avatar>
              <Paragraph>
                {contact?.name === name ? <UpdateContact /> : name}
              </Paragraph>
              <Paragraph>({number})</Paragraph>
              <div>
                <Button
                  rename
                  onClick={() => dispatch(renameContact({ id, name, number }))}
                >
                  <GrUpdateStyled size={'20px'} />
                </Button>
                <Button onClick={() => dispatch(deleteContact(id))}>
                  <ImCrossStyled size={'20px'} />
                </Button>
              </div>
            </Item>
          );
        })}
    </>
  );
};
