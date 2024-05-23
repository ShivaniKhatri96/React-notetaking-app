import { configureStore } from "@reduxjs/toolkit";
import loginModalReducer from '../features/loginModal/login-modal-slice';

export const store = configureStore({
    reducer: {
        loginModal: loginModalReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;