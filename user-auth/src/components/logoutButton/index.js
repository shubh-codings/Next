'use client'

import React from 'react'
import { Button } from '../ui/button'
import { logoutUser } from '@/actions'

function Logout() {
    const handleLogout = async()=>{
        await logoutUser();
    }
  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Logout
