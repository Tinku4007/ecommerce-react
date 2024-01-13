import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem('accessToken') || null,
    user: localStorage.getItem('accessToken') || null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem("accessToken", action.payload);
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
})

export const { setToken, setUser } = authSlice.actions
export default authSlice