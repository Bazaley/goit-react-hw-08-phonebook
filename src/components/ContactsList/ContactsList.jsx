import { useSelector, useDispatch } from 'react-redux';
import { selectFilterContact, selectContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';
import {
  Button,
  Item,
  ImCrossStyled,
  GrUpdateStyled,
  Paragraph,
} from './ContactsList.styled';

import { Avatar } from '@mui/material';

export const ContactsList = ({ setContact }) => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterContact);

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
                  bgcolor: '#48d1cc',
                }}
              >
                {name[0].toUpperCase()}
              </Avatar>
              <Paragraph>{name}</Paragraph>
              <Paragraph>{number}</Paragraph>
              <div>
                <Button
                  rename
                  onClick={() => {
                    setContact({ id, name, number });
                  }}
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
