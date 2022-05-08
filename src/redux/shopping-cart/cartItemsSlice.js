import { createSlice } from "@reduxjs/toolkit"

const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    value: items,
    quantity:0,
    total:0
}
export const cartItemsSlice = createSlice({
	name:"cartItems",
	initialState,
	reducers : {
		addItem(state, action){
            const newItem = action.payload
            const duplicate = state.value.filter(e => e.slug === newItem.slug && e.color === newItem.color && e.size === newItem.size)
            if (duplicate.length > 0) {
                state.value = state.value.filter(e => e.slug !== newItem.slug || e.color !== newItem.color || e.size !== newItem.size)
                state.value = [...state.value, {
                    id: duplicate[0].id,
                    ...action.payload,
                    quantity: newItem.quantity + duplicate[0].quantity
                }]
            } else {
                state.value = [...state.value, {
                    ...action.payload,
                    id: state.value.length > 0 ? state.value[state.value.length - 1].id + 1 : 1
                }]
            }
            localStorage.setItem('cartItems', JSON.stringify(state.value))
	},
        removeItem:(state,action) => {
            state.value = state.value.filter(e => e.id !== action.payload)
            localStorage.setItem('cartItems', JSON.stringify(state.value))
        },
        plusItem:(state,action) => {
            const newPlus = state.value.map((e => {
                if(e.id === action.payload) {
                    return {...e,quantity:e.quantity + 1}
                }
                return e
            }))
           state.value = newPlus
            localStorage.setItem('cartItems', JSON.stringify(state.value))
        },
        minusItem:(state,action) => {
            const newMinus = state.value.map((e => {
                if(e.id === action.payload) {
                    const newQuantity = e.quantity - 1 < 1? 1: e.quantity -1
                    return {...e,quantity:newQuantity}
                }
                return e
            }))
            state.value = newMinus
            localStorage.setItem('cartItems', JSON.stringify(state.value))
        },
        getTotals:(state,action) => {
            let { total, quantity } = state.value.reduce(
                (cartTotal,cartItem) => {
                    const {price ,quantity} = cartItem
                    const itemTotal = price * quantity
                    cartTotal.total += itemTotal
                    cartTotal.quantity += quantity
                    return cartTotal
                },{total:0,quantity:0})
                total = parseFloat(total.toFixed(2));
              return {...state,total,quantity}
        }
}
})

export const { addItem, removeItem,plusItem,minusItem ,getTotals} = cartItemsSlice.actions

export default cartItemsSlice.reducer