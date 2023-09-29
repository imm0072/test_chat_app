import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

  async function conn() {
  try {
    await mongoose.connect(process.env.db);
    console.error("[SERVER][DB]", "MongoDB Connected");
  } catch (error) {
    console.error("[SERVER][DB][ERROR]", error.message);
  }
};
conn()
 
 