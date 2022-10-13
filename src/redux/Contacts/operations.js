import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

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

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async contact => {
    const res = await axios.patch(`/contacts/${contact.id}`, {
      name: contact.name,
      number: contact.number,
    });
    return res.data;
  }
);

////////////////////////////////////////////

// function pass_gen(len) {
//   chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';
//   var str = '';
//   for (var i = 0; i < len; i++) {
//     var pos = Math.floor(Math.random() * chrs.length);
//     str += chrs.substring(pos, pos + 1);
//   }
//   return str;
// }

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }
