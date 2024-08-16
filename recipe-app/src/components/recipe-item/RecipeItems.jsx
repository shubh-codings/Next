import React from 'react'
import Link from "next/link"

function RecipeItems({ item }) {
    return (
        <div className='p-6 lg:max-w-6xl max-w-2xl mx-auto'>
            {/* <Link href={'/recipe-list'} className="text-blue-800 underline">Recipe Details</Link> */}
            <div className='grid items-start grid-cols-1 md:grid-cols-2 gap-10 mt-5'>
                <div className='w-full lg:sticky top-0 sm:flex gap-2'>
                    <img src={item.image} alt={item.name} className='w-4/5 rounded object-cover' />

                </div>
                <div>
                    <h2 className='text-3xl font-extrabold text-gray-500'>{item.name}</h2>
                    <div className='gap-3 mt-3'>
                        <p className='text-2xl text-gray-600'>{item.mealType[0]}</p>
                    </div>
                    <div className='gap-3 mt-3'>
                        <p className='text-xl text-gray-500'>{item.cuisine}</p>
                    </div>
                    <div className='gap-3 mt-5'>
                        <h3 className='text-2xl text-gray-300 font-bold'>Ingredients</h3>
                        <ul className='mt-3 space-y-2 text-gray-500 list-disc pl-4 text-sm'>
                            {item.ingredients.map(item => <li key={item}>{item}</li>)}
                        </ul>
                       
                    </div>
                    <div className='gap-3 mt-5'>
                        <h3 className='text-2xl text-gray-300 font-bold'>Instructions</h3>
                        <ul className='mt-3 space-y-2 text-gray-500 list-disc pl-4 text-sm'>
                            {item.instructions.map(item => <li key={item}>{item}</li>)}
                        </ul>
                       
                    </div>
                </div>


            </div>

        </div>
    )
}

export default RecipeItems
