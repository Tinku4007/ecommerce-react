import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: null
}

const HomeSlice = createSlice({
    name: 'addToCart',
    initialState,
    reducers: {
        setCart: (state, action ) => {
            state.cart = action.payload
        }
    }
})

export const { setCart } = HomeSlice.actions
export default HomeSlice