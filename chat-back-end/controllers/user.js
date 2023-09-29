import  User from "../models/User.schema.js";
const signIn = async (req, res) => {
 try {
  const { name, email } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    user = new User({ name, email });
    user = await user.save(); 
    return res.status(200).json({ user, error: false });
  }
  return res.status(200).json({ user, error: false });
 } catch (error) {
  return res.status(500).json({ log:error.message, error: false });
  
 }
};
const getUsers= async(req,res)=>{
const users=await User.find();
if(!users){
  return res.status(200).json({users:[],error:false});
}
return res.status(200).json({users:users,error:false});

}
const getUserById = async (req, res) => {
  res.status(200).json({ message: "request received" });
};

const registerUser = async (req, res) => {
  res.status(200).json({ message: "request received" });
};
const updateUserById = async (req, res) => {
  res.status(200).json({ message: "request received" });
};
const deleteUserById = async (req, res) => {
  res.status(200).json({ message: "request received" });
};

export { getUserById, updateUserById, registerUser, deleteUserById, signIn ,getUsers};
