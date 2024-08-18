'use client'
import { useDispatch } from "react-redux"
import { Card, CardContent, CardFooter } from "../ui/card"
import AddToCartButton from "./AddToCartButton"
import { addProducts } from "@/store/slice/productSlice";
import Link from "next/link";


function ProductList({products}) {
    const dispatch = useDispatch();

    dispatch(addProducts(products))
    if(products.length === 0){
        return <div className="flex items-center justify-center p-24">
            <p>No products to show.</p>
        </div>
    }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products && products.length > 0 && products.map(product=><Card key={product.id} className='flex flex-col justify-between items-end'>
            <CardContent>
                <div className="w-full p-3">
                    <img src={product.thumbnail} alt={product.title}  className="w-full  aspect-w-16 aspect-h-8 lg:h-80"/>
                </div>
                <div className="flex flex-col justify-center items-start gap-5">
                    <p className="text-xl ">{product.title}</p>
                    <p className="text-base "> ${product.price}</p>
                </div>
            </CardContent>
            <CardFooter className='flex gap-8'>
                <Link href={`/products/${product.id}`} className="border border-solid px-4 py-2 rounded-md border-gray-100">View</Link>
                <AddToCartButton product={product}/>
                
            </CardFooter>
        </Card>)}
    </div>
  )
}

export default ProductList
