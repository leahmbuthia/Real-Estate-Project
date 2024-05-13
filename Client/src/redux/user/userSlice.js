// This should be in userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    error: null, // Note: Corrected 'nulll' typo here to 'null'
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;
export default userSlice.reducer; // This should match what is imported in store.js
