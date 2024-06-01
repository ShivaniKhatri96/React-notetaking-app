import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { apiInstance } from "../axios/instance";

interface notesState {
  notes: any[];
  loading: boolean;
}

const initialState: notesState = {
  notes: [],
  loading: false,
};

const notesSlice = createSlice({
  name: "notesList",
  initialState,
  reducers: {
    fetchNotesStart: (state) => {
      state.loading = true;
    },
    fetchNotesSuccess: (state, action) => {
      state.loading = false;
      state.notes = action.payload;
    },
    addNotes: (state, action) => {
      state.notes.unshift(action.payload);
    },
  },
});
export const { fetchNotesStart, fetchNotesSuccess, addNotes } =
  notesSlice.actions;

// Async thunk for fetching notes
export const fetchNotes = () => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchNotesStart());
    const response = await apiInstance.get("/notes");
    if (response.status === 200) {
      const data = await response.data;
      dispatch(fetchNotesSuccess(data));
    }
  } catch (error) {
    console.log(error);
  }
};

export default notesSlice.reducer;
