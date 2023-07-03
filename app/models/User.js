import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    contact:{type:String},
    password:{Type:String}
},{timestamps:true})

export default mongoose.models.User || mongoose.model("User",UserSchema)