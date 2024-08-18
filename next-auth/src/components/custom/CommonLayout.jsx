

import { auth } from "@/auth"
import ReduxProvider from "./ReduxProvider"
import { redirect } from "next/navigation";

async function CommonLayout({children}) {
    const getSession = await auth();
    
  return (
    <>
      <ReduxProvider getSession={getSession}>
        
        {children}
      </ReduxProvider>
    </>
  )
}

export default CommonLayout
