import UserManagementContainer from '@/components/userManagement'
import { fetchUsers } from '../actions'




async function Users() {


  const response = await fetchUsers()

  
 

  return (
    <div className='flex  p-4 sm:p-8 md:p-12 lg:p-20 flex-col'>
        <h1 className='text-4xl text-center text-blue-700'>User Management</h1>
        <UserManagementContainer users={response.data}/>
        
      

    </div>
  )
}

export default Users
