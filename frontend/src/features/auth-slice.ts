import { createSlice } from "@reduxjs/toolkit";

interface authState {
  token: string | null;
  user: string | null;
}
const currentUser: any = localStorage?.getItem("noteUser");
const initialState: authState = {
  token: localStorage?.getItem("noteToken") || null,
  user: JSON.parse(currentUser) || null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});
export const { login, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
