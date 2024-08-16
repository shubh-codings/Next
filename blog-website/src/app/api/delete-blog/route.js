import connectToDB from "@/database"
import Blogs from "@/models/blogs";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server"


export async function DELETE(req) {
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
        const deleteCurrentBlogById = await Blogs.findByIdAndDelete(currentBlogId)
        console.log(deleteCurrentBlogById)

        if(deleteCurrentBlogById){
            return NextResponse.json({
                success:true,
                message:'Blog is Deleted Successfully!'
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