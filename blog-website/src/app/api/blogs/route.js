import connectToDB from "@/database"
import Blogs from "@/models/blogs";
import { NextResponse } from "next/server"



export async function GET() {
    try {
        await connectToDB();
        const extractAllBlogData = await Blogs.find({});

        if (extractAllBlogData){
            return NextResponse.json({
                success:true,
                message:'Data Fetch Successfully',
                data:extractAllBlogData,
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