'use server'

import connectToDb from "@/database"
import Users from "@/models/user"
import { revalidatePath } from "next/cache"


// add a new users 

export const addNewUser = async(formData,URL)=>{
    await connectToDb()
    try {
        // validate the data 
      
        // create the data 
        const newUser = await Users.create(formData)
        if (newUser){
            revalidatePath(URL)
            return {
            success:true,
            message:"User created successfully!",
            }
        }else{
            return {
                success:false,
                message:"Something Went Wrong! Please Try Again.",
            } 
        }
    } catch (error) {
        return {
            success:false,
            message:"Something Went Wrong! Please Try Again.",
            error:error
        }
    }
}

// get all users 
export const fetchUsers = async()=>{
    await connectToDb()
    try {
         // fetch the data 
         const users = await Users.find({})
         if (users){
            return {
            success:true,
            message:"User fetched successfully!",
            data:JSON.parse(JSON.stringify(users))
            }
        }else{
            return {
                success:false,
                message:"Something Went Wrong! Please Try Again.",
            } 
        }
    } catch (error) {
        return {
            success:false,
            message:"Something Went Wrong! Please Try Again.",
            error:error
        }
    }
}

// delete user 

export const deleteUserById = async(id,url)=>{
    await connectToDb()
    try {
         // fetch the data 
         const deletedUser = await Users.findByIdAndDelete(id)
         if (deletedUser){
            revalidatePath(url)
            return {
            success:true,
            message:"User Deleted successfully!",
            // data:users
            }
        }else{
            return {
                success:false,
                message:"Something Went Wrong! Please Try Again.",
            } 
        }
    } catch (error) {
        return {
            success:false,
            message:"Something Went Wrong! Please Try Again.",
            error:error
        }
    }
}

export const updateUserById = async(id,data,url)=>{
    await connectToDb()
    try {
         // fetch the data 
         const updatedUser = await Users.findByIdAndUpdate(id,data)
         if (updatedUser){
            revalidatePath(url)
            return {
            success:true,
            message:"User Updated successfully!",
            // data:users
            }
        }else{
            return {
                success:false,
                message:"Something Went Wrong! Please Try Again.",
            } 
        }
    } catch (error) {
        return {
            success:false,
            message:"Something Went Wrong! Please Try Again.",
            error:error
        }
    }
}