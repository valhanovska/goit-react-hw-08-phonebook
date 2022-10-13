import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations.js';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    editContact: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    editContactAction: (state, { payload }) => {
      state.editContact = payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
    },
    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const index = state.items.findIndex(contact => contact.id === payload.id);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [editContact.pending]: state => {
      state.isLoading = true;
      state.editContact = null;
    },
    [editContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.map(contact =>
        contact.id === payload.id ? payload : contact
      );
    },
    [editContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default contactsSlice.reducer;

export const { editContactAction } = contactsSlice.actions;
