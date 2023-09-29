import mongoose from "mongoose" 
const schema=mongoose.Schema({
    name:{type:String},
    email:{type:String}
})

const USER=mongoose.model("users",schema);
export default USER;