import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL =
//   'https://63bf1ba5e348cb0762212ea7.mockapi.io/phone-book/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(
        'https://63bf1ba5e348cb0762212ea7.mockapi.io/phone-book/contacts'
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'https://63bf1ba5e348cb0762212ea7.mockapi.io/phone-book/contacts',
        contact
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(
        `https://63bf1ba5e348cb0762212ea7.mockapi.io/phone-book/contacts/${id}`
      );

      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contact, { rejectWithValue }) => {
    try {
      await axios.put(
        `https://63bf1ba5e348cb0762212ea7.mockapi.io/phone-book/contacts/${contact.id}`,
        contact
      );

      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
