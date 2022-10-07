import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://633da28e7e19b178291320e2.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/getAll', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return console.log(error.message);
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    return await axios.post('/contacts', contact).then(res => res.data);
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    return await axios.delete(`/contacts/${id}`).then(res => res.data);
  }
);
