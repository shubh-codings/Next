import mongoose from "mongoose";

const BlogsSchema = new mongoose.Schema({
    title:String,
    description:String,
})


const Blogs = mongoose.models.Blogs || mongoose.model('Blogs', BlogsSchema)

export default Blogs;