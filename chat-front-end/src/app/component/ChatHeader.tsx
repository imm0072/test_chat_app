import { BsThreeDotsVertical } from "react-icons/bs";
import React from "react";
const ChatHeader:React.FC<any>=()=>{
    return<>
     <div className=" min-h-full flex justify-between bg-white items-center align-middle pl-2 pr-2  ">
            <div className="flex items-center gap-3   ">
              <img
                src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
                height={100}
                width={100}
                alt="avt"
              />
              <h4>Ajay Panchal</h4>
            </div>
            <div>
              <span className="text-xl">
                <BsThreeDotsVertical />
              </span>
            </div>
          </div></>
}

export default ChatHeader