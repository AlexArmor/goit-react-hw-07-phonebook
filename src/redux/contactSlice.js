import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = { items: [] };

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContacts(state, { payload }) {
      state.items = [...state.items, payload];
    },
    deleteContacts(state, { payload }) {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContacts, deleteContacts } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
