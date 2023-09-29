import http, { validateHeaderName } from "http";
import { Server } from "socket.io";
import User from "../models/User.schema.js";  

export const getUserList= async()=>{
  const users=await User.find(); 
  return users
}

export const onConnected = async (socket) => {
  console.log("A user connected");  
  socket.on("disconnect",disConnected)  
  socket.emit("get_user_list",await getUserList())

};
export const disConnected = async (socket) => {
  console.log("A user disConnected");
};
 


const AppSocket = async (app) => {
  const server = http.createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      credentials: true // Enable cookies and credentials
    },
    transports: ['websocket', 'polling'] // Set the transports here
  });


  io.on("connection", onConnected);
  
  return server;
};

export default AppSocket;
