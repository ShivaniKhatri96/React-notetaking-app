import { Dispatch, createSlice } from "@reduxjs/toolkit";
import { apiInstance } from "../axios/instance";

interface NoteItem {
  content: string;
  privacy: boolean;
  title: string;
  user: string;
  _id: string;
}
interface notesState {
  notes: NoteItem[];
  isLoading: boolean;
}

const initialState: notesState = {
  notes: [],
  isLoading: false,
};

const notesSlice = createSlice({
  name: "notesList",
  initialState,
  reducers: {
    fetchNotesStart: (state) => {
      state.isLoading = true;
    },
    fetchNotesSuccess: (state, action) => {
      state.isLoading = false;
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
      // to show latest created note at the top
      const reversedData = data.reverse();
      dispatch(fetchNotesSuccess(reversedData));
    }
  } catch (error) {
    console.log(error);
  }
};

export default notesSlice.reducer;
