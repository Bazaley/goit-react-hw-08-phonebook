import Backdrop from '@mui/material/Backdrop';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contacts-operations';
import { FormTag, Input, Label, ButtonForm } from './UpdateContact.styled';

const UpdateContact = ({ contact, setContact }) => {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const [id] = useState(contact.id);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(updateContact({ name, number, id }));
    setContact(null);
    setOpen(false);
  };
  return (
    <Backdrop
      open={open}
      onClick={e => {
        if (e.target.nodeName !== 'DIV') return;
        setContact(null);
        setOpen(false);
      }}
    >
      <FormTag onSubmit={handleSubmit}>
        <Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Contact name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="off"
          />
        </Label>
        <Label>
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
            placeholder="Contact phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            autoComplete="off"
          />
        </Label>

        <ButtonForm type="sumbit">Rename</ButtonForm>
      </FormTag>
    </Backdrop>
  );
};

export default UpdateContact;
