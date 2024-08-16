import connectToDB from "@/database"
import Blogs from "@/models/blogs";
import Joi from "joi";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server"

const AddNewBlog = Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
})

export async function POST(req) {
    try {
        await connectToDB();
        const extractBlogData = await req.json();

        const {title,description} = extractBlogData;

        const {error} = AddNewBlog.validate({
            title,description
        })

        if (error){
            return NextResponse.json({
                success:false,
                message:error.details[0].message
            })
        }

        const newCreatedBlog = await Blogs.create(extractBlogData)
        
        if(newCreatedBlog){
            return NextResponse.json({
                success:true,
                message:'Succesfully created a blog'
            })
            
        }else{
            return NextResponse.json({
                success:false,
                message:'Something Went Wrong ! Please Try Again.'
            })
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success:false,
            message:'Something Went Wrong ! Please Try Again.'
        })
    }
    
}