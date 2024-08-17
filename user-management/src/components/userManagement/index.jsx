'use client'

import React, { useContext } from 'react'
import AddUserContext from '@/context/userContext'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { addNewUser, deleteUserById, updateUserById } from '@/app/actions'


function UserManagementContainer({ users }) {
  const { setOpenAddUserForm, openAddUserForm, currentUserId, setCurrentUserId, loading, userFormControls, userFormData, setUserFormData, userInitialFormData,setLoading } = useContext(AddUserContext);
  console.log(users,'Users')

  const handleSubmit = async () => {
    setLoading(true)
    try {
      if (currentUserId) {
        await updateUserById(currentUserId, userFormData, '/users')
      } else {
        await addNewUser(userFormData, '/users');
  
      }
      setOpenAddUserForm(false)
      setUserFormData(userInitialFormData)
      setCurrentUserId('')
      setLoading(false)
   
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    await deleteUserById(id, '/users')
  }
  const handleUpdate = async (user) => {
    setCurrentUserId(user._id)
    setUserFormData({...userFormData,firstName:user.firstName,lastName:user.lastName,email:user.email,password:user.password,address:user.address})
    setOpenAddUserForm(true)
  }

  const handleFormValid = () => {
    return Object.keys(userFormData).every(key => userFormData[key].trim() !== '')
  }

  return (
    <div className='flex flex-col space-y-10 p-5 mt-5'>
      <Dialog open={openAddUserForm} onOpenChange={() => {
        setOpenAddUserForm();
        setUserFormData(userInitialFormData)
      }}>
        <DialogContent className="sm:max-w-[500px]">
          <form action={handleSubmit}>
            <DialogHeader>
              <DialogTitle>{currentUserId ? 'Edit User' : 'Add New User'}</DialogTitle>
              <DialogDescription>
                {currentUserId ? 'Edit the existing User' : 'Create A new User'}
              </DialogDescription>
            </DialogHeader>
            {userFormControls.map(control => <div key={control.name} className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  {control.label}
                </Label>
                <Input
                  id={control.name}
                  name={control.name}
                  type={control.type}
                  placeholder={control.placeholder}
                  value={userFormData[control.name]}
                  onChange={(e) => setUserFormData({ ...userFormData, [control.name]: e.target.value })}
                  className="col-span-3"
                />
              </div>

            </div>)}
            <DialogFooter>
              <Button type="submit" disabled={!handleFormValid()} className="disabled:opacity-55">{loading ? 'Saving User' : 'Save User'}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      <div>
        <Button onClick={() => {
          setOpenAddUserForm(true)
        }}>Add User</Button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4'>
        {users && users.length > 0 ? users.map(user => <Card key={user._id}>

          <CardContent className='flex flex-col justify-center items-center p-3 gap-2'>
            <h4 className='text-xl font-bold text-gray-200 mb-2'>{user.firstName + " " + user.lastName}</h4>
            <p className='text-sm  text-gray-400'>{user.email}</p>
            <p className='text-sm  text-gray-400'>{user.address}</p>
          </CardContent>
          <CardFooter className="flex justify-center items-end gap-8">
              <Button onClick={()=>{handleUpdate(user)}}>Edit</Button>
              <Button variant='destructive' onClick={()=>{handleDelete(user._id)}}>Delete</Button>
          </CardFooter>
        </Card>) :<h3>No Data To Show</h3>
        }
      </div>
    </div>
  )
}

export default UserManagementContainer
