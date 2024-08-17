import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    address:String,
    isAdmin:Boolean
});

const Users =  mongoose.models.users || mongoose.model("users",userSchema);

export default Users;