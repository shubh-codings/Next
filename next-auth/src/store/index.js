import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/store/slice/cartSlice";
import productReducer from "@/store/slice/productSlice";

const store = configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer,
    }
})

export default store;