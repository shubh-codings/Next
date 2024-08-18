'use client'

import { Button } from "../ui/button"
import AddToCartButton from "./AddToCartButton"

function ProductDetail({ product }) {
    console.log(product)
    return (
        <div className="grid grid-cols-5 w-[80%] mx-auto py-10">
            <div className="flex col-span-3 flex-col justify-center items-center">
                <div className=" w-full border border-solid flex flex-col justify-center items-center border-gray-50 rounded-lg mx-auto">
                    <img src={product.thumbnail} alt={product.title} className=" object-fit" />
                </div>
                <div className="flex flex-wrap w-full gap-4">
                    {product.images.map(images => <img src={images} alt={product.title} className="w-40 h-40" />)}
                </div>
            </div>
            <div className="flex col-span-2 flex-col justify-start items-start gap-8 p-5">
                <h1 className="text-3xl">{product.title}</h1>
                <p className="text-xl">{product.description}</p>
                <p className="text-xl">{product.price}</p>
                <AddToCartButton product={product}/>
            </div>
        </div>
    )
}

export default ProductDetail
