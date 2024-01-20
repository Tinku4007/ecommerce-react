import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: null,
    product:null
}

const HomeSlice = createSlice({
    name: 'addToCart',
    initialState,
    reducers: {
        setCart: (state, action ) => {
            state.cart = action.payload
        },
        setProduct: (state, action ) => {
            state.product = action.payload
        },
    }
})

export const { setCart , setProduct} = HomeSlice.actions
export default HomeSlice