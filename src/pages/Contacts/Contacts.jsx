import { ContactsList } from 'components/ContactsList/ContactsList';
import { Table, Thead, Th, Box } from './Contacts.styled';

// import { useSelector, useDispatch } from 'react-redux';
// import {
//   selectFilterContact,
//   selectContacts,
//   selectRenameContact,
// } from 'redux/selectors';
// import { deleteContact } from 'redux/contacts/contacts-operations';

// import UpdateContact from 'components/UpdateContact/UpdateContact';
// import { renameContact } from 'redux/contacts/contactsSlice';

const Contacts = () => {
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilterContact);
  // const contact = useSelector(selectRenameContact);

  // const dispatch = useDispatch();
  return (
    <Box>
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
    </Box>
    // <Box>
    //   <ul>
    //     {contacts.map(({ id, name, number }) => {
    //       return (
    //         <li key={id}>
    //           <p>{contact?.name === name ? <UpdateContact /> : name}</p>
    //           <p>{number}</p>

    //           <button
    //             rename
    //             onClick={() => dispatch(renameContact({ id, name, number }))}
    //           >
    //             rename
    //           </button>

    //           <button onClick={() => dispatch(deleteContact(id))}>
    //             delete
    //           </button>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </Box>
  );
};

export default Contacts;
