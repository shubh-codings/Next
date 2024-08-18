'use client'

import { loginUser } from "@/actions";
import FormComponent from "@/components/form-element";
import { Button } from "@/components/ui/button";
import { LoginFormControls, LoginInitialData } from "@/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {

    const [formData,setFormData] = useState(LoginInitialData)
    const [error,setError] = useState('')

    const router = useRouter();

    const handleLogin = async()=>{
        const result = await loginUser(formData);
        if(result.success) {
            setError('')
            router.push('/')
        }
            else{
                setError(result.message)
        }
    }

    const handleLoginValid = ()=>{
        return Object.keys(formData).every(key=>formData[key].trim() !== '')
    }

    return (
        <div className="min-w-full min-h-screen flex justify-center items-center">
            <div className="max-w-[500px] w-full  p-10 flex  flex-col justify-center border border-solid border-gray-500 rounded">
            <h1 className="text-4xl text-gray-100 mb-5">Login</h1>
            <form action={handleLogin} className="flex flex-col justify-start items-start gap-4 w-full">

            {LoginFormControls.map(control=>
            <FormComponent 
                key={control.name} 
                control={control}
                value = {formData[control.name]}
                onChange = {(event)=>setFormData({...formData,[control.name]:event.target.value})}
            />)}

                <Button type='submit' disabled={!handleLoginValid()} className='disabled:opacity-55 w-full'>Login</Button>
            

            </form>

           {error &&  <p className="text-sm text-red-600 py-5">{error}</p>}

        </div>
        </div>
    );
}