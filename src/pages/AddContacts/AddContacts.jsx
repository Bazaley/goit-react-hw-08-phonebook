import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FormTag, Input, Label, Button } from './AddContacts.styled';
import { Navigate } from 'react-router-dom';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { Section } from 'components/Section/Section';

import Particle from 'components/Particle/Particle';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmit(true);

    contacts.some(contact => contact.name === name)
      ? Notify.info(`${name} is already in contacts`, {
          position: 'center-top',
        })
      : dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <>
      {isSubmit ? (
        <Navigate to="/contacts" />
      ) : (
        <Section
          title="Fill out the form to add a contact to the book
        "
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
              />
            </Label>

            <Button type="sumbit">Add contact</Button>
          </FormTag>
        </Section>
      )}
      <Particle />
    </>
  );
};

export default Form;
