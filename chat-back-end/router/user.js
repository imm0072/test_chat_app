import express from "express";
const router= express.Router();
import { getUserById, updateUserById, registerUser,deleteUserById ,signIn,getUsers} from "../controllers/user.js";

router.post("/api/v1/signin", signIn);
router.post("/api/v1/user", registerUser);
router.get("/api/v1/user", getUsers);
router.get("/api/v1/user/:id", getUserById);
router.put("/api/v1/user/:id", updateUserById);
router.delete("/api/v1/user/:id", deleteUserById); 
export default router   
