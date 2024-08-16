import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <nav className=' bg-slate-800 p-3 flex justify-between items-center h-20 shadow-lg w-full sticky top-0 right-0 z-50'>
        <div className='flex justify-start items-center'>
            <Link href={'/'}><h1 className='text-4xl text-gray-100 font-bold'>GET RECIPES</h1></Link>
            </div>
            <ul className='px-5 flex justify-start items-center space-x-10'>
                <li>
                    <Link href={'/'} className="text-2xl text-blue-500 hover:underline hover:scale-100 transition-all">Home</Link>
                </li>
                <li>
                    <Link href={'/recipe-list'} className="text-2xl text-blue-500 hover:underline hover:scale-[2] transition-all">Recipe List</Link>
                </li>
                
            </ul>
      
    </nav>
  )
}

export default Header
