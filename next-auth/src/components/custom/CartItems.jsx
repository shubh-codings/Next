'use client'

import { useDispatch, useSelector } from "react-redux"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { removeFromCart } from "@/store/slice/cartSlice";
import { useEffect, useState } from "react";

function CartItems() {
    const [totalAmount,setTotalAmount]= useState();
    const dispatch = useDispatch();
    const {cartItems} = useSelector(state=>state.cart)

    useEffect(()=>{
        setTotalAmount(cartItems.reduce((acc,curr)=>acc+curr.price,0))
    },[cartItems])

    if(cartItems.length === 0){
        return <div>
            <h1>Cart is empty</h1>
        </div>
    }
    const handleRemoveFromCart =(id)=>{
        dispatch(removeFromCart(id))
    }

  return (
    <div className="lg:w-[80%] flex flex-col gap-4">
      {cartItems.map(item=><Card key={item.id} className='w-full'>
        <CardContent className='w-full flex justify-between items-center p-5'>
            <div className="w-1/2">
                <img src={item.thumbnail} alt={item.title} className="w-full h-80 object-contain"/>
            </div>
            <div className="flex flex-col gap-8 w-1/2">
                <h1 className="text-3xl">{item.title}</h1>
                <p className="text-xl">{item.price}</p>
                <Button onClick={()=>handleRemoveFromCart(item.id)}>Remove</Button>
            </div>
        </CardContent>
      </Card>)}
      <div className='w-full flex justify-center items-center p-10'>
        <h1 className="text-3xl">Total : ${totalAmount}</h1>
      </div>
    </div>
  )
}

export default CartItems
