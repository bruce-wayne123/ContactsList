import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  contacts: []
};
export const fetchContacts = createAsyncThunk("fetchContacts", async () => {
  try {
    const apiResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const contactList = await apiResponse.json();
    return { contacts: contactList };
  } catch (error) {
    console.log(error);
  }
});

const contactSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact: (state, action) => {
      state.push({
        id: Math.floor(Math.random() * 100),
        name: action.payload.name,
        username: action.payload.username,
        email: action.payload.email,
        phone: action.payload.phone
      });
    },
    removeContact: (state, action) => {
      const index = state.findIndex((contact) => contact);
      state.splice(index, 1);
    }
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      if (action.payload && action.payload.contacts) {
        state.contacts = action.payload.contacts;
      }
    }
  }
});

export const { addContact, removeContact } = contactSlice.actions;
export default contactSlice.reducer;
