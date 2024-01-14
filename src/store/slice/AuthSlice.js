import { createSlice } from "@reduxjs/toolkit";
import { setLocalStorage } from "../../utils/LocalstorageUtils";

const initialState = {
    token: localStorage.getItem('accessToken') || null,
    user: localStorage.getItem('user') || null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            setLocalStorage("accessToken", action.payload);
        },
        setUser: (state, action) => {
            state.user = action.payload;
            setLocalStorage("user", action.payload);
        }
    }
})

export const { setToken, setUser } = authSlice.actions
export default authSlice