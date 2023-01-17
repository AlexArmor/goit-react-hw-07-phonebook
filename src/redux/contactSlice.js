import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

// const contactsInitialState = { items: [] };

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  // addContacts(state, { payload }) {
  //   state.items = [...state.items, payload];
  // },
  // deleteContacts(state, { payload }) {
  //   state.items = state.items.filter(contact => contact.id !== payload);
  // },
});

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactSlice.actions;
// export const { addContacts, deleteContacts } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
