import { createSlice } from "@reduxjs/toolkit"



const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems :[],
    },
    reducers:{
        addToCart(state,action){
            state.cartItems.push(action.payload);
        },
        removeFromCart(state,action){
            const items = state.cartItems.filter(item=>item.id !== action.payload);
            state.cartItems = items;
        }
    }
})

export const {addToCart,removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;