'use client'

import { RegisterFormControls, RegisterInitialData } from "@/utils"
import { Button } from "@/components/ui/button";
import { useState } from "react"
import FormComponent from "@/components/form-element";
import { registerUser } from "@/actions";
import { redirect } from "next/navigation";

export default function Register() {
    
    const [formData,setFormData] = useState(RegisterInitialData)
    const [error,setError] = useState('')

    const handleRegister = async()=>{
        const result = await registerUser(formData);
        if(result.success) {
            setError('')
            router.push('/sign-in')
        }
            else{
                setError(result.message)
        }
    }

    const handleRegisterValid = ()=>{
        return Object.keys(formData).every(key=>formData[key].trim()!=='')
    }
    return (
        <div className="min-w-full min-h-screen flex justify-center items-center">
            <div className="max-w-[500px] w-full  p-10 flex  flex-col justify-center border border-solid border-gray-500 rounded">
            <h1 className="text-4xl text-gray-100 mb-5">Register</h1>
            <form action={handleRegister} className="flex flex-col justify-start items-start gap-4 w-full">

            {RegisterFormControls.map(control=>
            <FormComponent 
                key={control.name} 
                control={control}
                value = {formData[control.name]}
                onChange = {(event)=>setFormData({...formData,[control.name]:event.target.value})}
            />)}

                <Button type='submit' disabled={!handleRegisterValid()} className='disabled:opacity-55 w-full'>Register</Button>
            

            </form>
            {error &&  <p className="text-sm text-red-600 py-5">{error}</p>}
        </div>
        </div>
    );
}