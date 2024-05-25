import { configureStore } from "@reduxjs/toolkit";
import loginModalReducer from '../features/login-modal-slice';
import authReducer from "../features/auth-slice";
export const store = configureStore({
    reducer: {
        loginModal: loginModalReducer,
        auth: authReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;