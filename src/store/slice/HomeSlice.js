import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : []
}

const HomeSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart:(state , action)=>{
            state.cart = action.payload
        }
    }
})

export const {  setCart } = HomeSlice.actions
export default HomeSlice