import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations.js';

// const initialState = {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
// };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   addContact: (state, action) => {
  //     //   state.contacts.push(action.payload);
  //     state.items = [...state.items, action.payload];
  //   },
  //   deleteContact: (state, action) => {
  //     state.items = state.items.filter(
  //       contact => contact.id !== action.payload
  //     );
  //   },
  // },
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
    [deleteContact.pending]: (state, action) => {
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
  },
});

export default contactsSlice.reducer;
