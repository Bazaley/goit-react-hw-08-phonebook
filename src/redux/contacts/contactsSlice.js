import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contacts-operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  contactUpdate: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    renameContact: (state, { payload }) => {
      state.contactUpdate = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.isLoading = false;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(({ id }) => id !== payload);
        state.isLoading = false;
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        const contactIndex = state.contacts.findIndex(
          ({ id }) => id === payload.id
        );
        state.contacts[contactIndex] = payload;
        state.contactUpdate = null;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
          updateContact.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          updateContact.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});
export const { renameContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
