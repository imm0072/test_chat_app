import express from "express";
import userRouter from "./user.js";
const router = express.Router(); 

router.use(userRouter);
router.all("*", (req, res) => {
     return res.status(404).json({ status: 404, msg: "Not Found" });
});
export default router;
