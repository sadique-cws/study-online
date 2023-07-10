import mongoose from "mongoose"
import user from './User';
import topic from './Topic';


const ContentSchema = new mongoose.Schema({
    topic_id:{type:mongoose.Schema.Types.ObjectId,ref:"topic"},
    content_title:{type:String},
    content_text:{type:String},
    author:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    views:{type:Number},
    status:{type:Boolean}
},{timestamps:true})

export default mongoose.models.Content || mongoose.model("Content",ContentSchema)