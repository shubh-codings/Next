'use server'
import connectToDb from "@/database"
import User from "@/models/user"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers"




export async function registerUser(formData){
    await connectToDb();
    try {
        const {email,userName,password} = formData;
        // check if user already exist 
        const checkUser = await User.findOne({email})
        if(checkUser){
            return {
                success:false,
                message:'Email already exist! Try different email.'
            }
        }

        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password,salt)

        const newUser = new User({
            userName, email,password:hashPassword
        });

        const registeredUser = await newUser.save();

        if(registeredUser){
            return {
            success:true,
            message:'User Registered Successfully' ,
            data:JSON.parse(JSON.stringify(registeredUser))
            
            }
        }else{
            return { 
                success:false,
                message:'Something went wrong! Please Try Again.'
            } 
        }
        
    } catch (error) {
        return { 
            success:false,
            message:'Something went wrong! Please Try Again.'
        }
    }
}

export async function loginUser(formData){
    await connectToDb();
    try {
        const {email,password} = formData;
        // check if user exist 
        const checkUser = await User.findOne({email})
        if(!checkUser){
            return {
                success:false,
                message:'Email does not exist. Please provide valid email or register first.'
            }
        }

        // check if password is valid 

        const validPassword = await bcryptjs.compare(password,checkUser.password)

        if(!validPassword){
            return { 
                success:false,
                message:'Invalid Password! Please Try Again.'
            }
        }

        const tokenData = {
            id :checkUser._id,
            userName: checkUser.userName,
            email: checkUser.email
        }


       const token = jwt.sign(tokenData,'DEFAULT_KEY',{expiresIn:'1d'})

       const Cookies = cookies();
        Cookies.set('token',token)

        return {
            success:true,
            message:'Login Successfully' ,
        }

        
    } catch (error) {
        return { 
            success:false,
            message:'Something went wrong! Please Try Again.'
        }
    }
}

export async function getAuthenticatedUser (){
    await connectToDb();
    try {
        const token = cookies().get('token')?.value || '' ;

         if(token === ''){
            return {
                success:false,
                message:'Invalid token'
            }
        }

        const decodedToken = jwt.verify(token,'DEFAULT_KEY');

        const getUserData = await User.findById({
            _id:decodedToken.id
        })

        if(getUserData){
            return { 
                success:true,
                message:'User fetched successfully!',
                data:JSON.parse(JSON.stringify(getUserData))
            }
        }else{
            return { 
                success:false,
                message:'Something went wrong! Please Try Again.'
            }
        }

    } catch (error) {
        return { 
            success:false,
            message:'Something went wrong! Please Try Again.'
        }
    }
}


export async function logoutUser(){
    const getCookies = cookies();
    getCookies.set('token','') ;

}