import connectToDB from "@/database"
import Blogs from "@/models/blogs";
import Joi from "joi";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server"

const EditBlog = Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
})

export async function PUT(req) {
    try {
        await connectToDB();
        const {searchParams} = new URL(req.url);
        const currentBlogId = searchParams.get('id')
        if(!currentBlogId){
            return NextResponse.json({
                success:true,
                message:'Blog Id is Required!'
            })
        }
        const extractBlogData = await req.json();

        const {title,description} = extractBlogData;

        const {error} = EditBlog.validate({
            title,description
        })

        if (error){
            return NextResponse.json({
                success:false,
                message:error.details[0].message
            })
        }

        const editBlogById = await Blogs.findByIdAndUpdate({_id:currentBlogId},{title,description},{new:true});
        
        if(editBlogById){
            return NextResponse.json({
                success:true,
                message:'Succesfully Edited a blog'
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