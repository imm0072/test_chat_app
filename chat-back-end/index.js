import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import appSocket from "./controllers/AppSocket.js";
import logger from 'morgan';
dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }
  )); 
// connecting to database 
import "./models/index.js"  
// adding routing   
import router from "./router/index.js";
app.use(router); 
// // Start the Socket.IO server
const server=await appSocket(app);
// Start the server
const PORT = process.env.PORT || 3002;  
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
