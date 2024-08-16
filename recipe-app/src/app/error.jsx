"use client"
import { useEffect } from "react"

export default function Error({ error, reset }) {
     useEffect(() => {
         console.log(error)
     },[error])

    return (
        <div className="flex flex-col justify-center items-center min-h-screen space-y-10">
            <h2 className="text-4xl text-red-900">Something went wrong!</h2>
            <p className="text-xl text-red-500">{error.message} || Something Went Wrong</p>
            <button onClick={reset} className="text-blue-900 underline text-3xl">
                 Try again
            </button>
        </div>
    );
}