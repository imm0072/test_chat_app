import { io } from "socket.io-client";

// Create a Socket instance
const socket = io("http://localhost:1234/");

// Define a function to handle the "get_user_list" event
const handleGetUserList = async (users) => {
  if (!users) {
    return;
  }
  console.log("users", users);
  // You can perform any necessary operations with the users here.
  // setUserList(users);
};

// Use the on method to listen for the "get_user_list" event
socket.on("get_user_list", handleGetUserList);

export default socket;
