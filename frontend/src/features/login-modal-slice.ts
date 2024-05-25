import { createSlice } from "@reduxjs/toolkit";

interface loginModalState {
    isActive: boolean;
}

const initialState: loginModalState = {
    isActive: false,
}

const loginModalSlice = createSlice({
    name: 'loginModal',
    initialState,
    reducers: {
        toggleLoginModal: (state) => {
            state.isActive = !state.isActive;
        }
    }
})

export const { toggleLoginModal } = loginModalSlice.actions;
export default loginModalSlice.reducer;