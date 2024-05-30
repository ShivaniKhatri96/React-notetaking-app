import { createSlice } from "@reduxjs/toolkit";

interface notesState {
  notes: any[];
}

const initialState: notesState = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    addNotes: (state, action) => {
        state.notes.unshift(action)
    }
  },
});

export const {setNotes} = notesSlice.actions;
export default notesSlice.reducer;
