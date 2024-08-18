'use client'

import { useDispatch, useSelector } from "react-redux"
import { Button } from "../ui/button"
import { addToCart, removeFromCart } from "@/store/slice/cartSlice";
import { useEffect, useState } from "react";

function AddToCartButton({product}) {
    

    const [isExisting,setIsExisting] = useState(false);

    const dispatch = useDispatch();
    const {cartItems} = useSelector(state=>state.cart);
    useEffect(()=>{
        setIsExisting(cartItems.some(item=>item.id === product.id))
    },[cartItems])



    const handleAddToCart = ()=>{
        dispatch(addToCart(product))
    };
    const handleRemoveFromCart = ()=>{
        dispatch(removeFromCart(product.id))
    };

  return (
    <div>
      <Button onClick={isExisting ? handleRemoveFromCart : handleAddToCart}>{isExisting ? 'Remove from Cart':'Add to Cart'}</Button>
    </div>
  )
}

export default AddToCartButton
