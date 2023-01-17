import { createSlice } from '@reduxjs/toolkit';

// const contactsInitialState = { items: [] };

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // addContacts(state, { payload }) {
    //   state.items = [...state.items, payload];
    // },
    // deleteContacts(state, { payload }) {
    //   state.items = state.items.filter(contact => contact.id !== payload);
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } = contactSlice.actions;
// export const { addContacts, deleteContacts } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
