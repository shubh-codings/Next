'use client'

import { Button } from "../ui/button"
import { LoginAction, LogoutAction } from "@/action";

function AuthButton({getSession}) {
    const user = getSession?.user || '';

 const handleSignIn = async()=>{
    await LoginAction()
 }
 const handleSignOut = async()=>{
    await LogoutAction();
 }
  return (
    <form action={user?handleSignOut:handleSignIn} className=" h-full flex justify-center items-center">
        <Button type='submit'>{user ? "Logout":"Login"}</Button>
    </form>
  )
}

export default AuthButton
