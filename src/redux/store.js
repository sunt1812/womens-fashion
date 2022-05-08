import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from './shopping-cart/cartItemsSlice'
export const store = configureStore({
    reducer :{
        cartItems:cartItemReducer,
    },
})
