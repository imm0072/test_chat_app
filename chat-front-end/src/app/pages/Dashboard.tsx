import ChatUserList from "../component/ChatUserList";
import ChatContent from "../component/ChatContent";
import ChatHeader from "../component/ChatHeader";
import {IoUserList} from "../sockets/Socket"
import Modal from "../component/Modal"; 
import { useEffect, useState } from "react";   
const Dashboard = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    // socket.on("get_user_list", (users) => {
    //   if (!users) {
    //     return;
    //   }
    //   console.log("users", users);
    //   setUserList(users);
    // }); 
    IoUserList
  }, [ ]);
 

  return (
    <>
      <main className=" h-screen w-screen p-5 m-auto bg-slate-100 flex justify-center ">
        <div className="shadow-md h-min w-full min-h-[32rem]">
          <ChatHeader />
          <div className=" min-h-full grid grid-cols-3  relative">
            {/* side bar */}
            <ChatUserList userList={userList} />
            {/* chat content */}
            <ChatContent />
          </div>
        </div>
        <Modal />
      </main>
    </>
  );
};
export default Dashboard;
