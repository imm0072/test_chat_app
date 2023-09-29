import mongoose from "mongoose" 

const schema=mongoose.Schema({
    chatBetween:[{type:String}],
    isGroup:{type:Boolean}, 
    iAt:{type:String,default:new Date(),immutable: true },
    uAt:{type:String,default:new Date()}
})

const conversation=mongoose.model("conversation",schema);
export default conversation;