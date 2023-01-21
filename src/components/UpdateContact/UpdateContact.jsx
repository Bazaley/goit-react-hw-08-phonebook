import { useSelector, useDispatch } from 'react-redux';
import { selectRenameContact } from 'redux/selectors';
import { updateContact } from 'redux/contacts/contacts-operations';
import { useState } from 'react';

const UpdateContact = () => {
  const [name, setName] = useState(useSelector(selectRenameContact).name);
  const dispatch = useDispatch();
  const contact = useSelector(selectRenameContact);

  const handleChange = ({ target: { value } }) => {
    setName(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateContact({ ...contact, name }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </form>
  );
};

export default UpdateContact;
