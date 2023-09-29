import React, { useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { sendMessage } from "../../store/features/chatSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import Message from "./Message";
const ChatContent: React.FC<any> = () => {
  const chat = useAppSelector((state) => state.chat.messages);
  const [msg, setMsg] = useState<string>("");
  const inputRef = useRef(null);
  const dispatch = useAppDispatch();
  const sendMsgHandler = () => {
    dispatch(sendMessage(msg)); 
    setMsg("")
    inputRef.current.focus()
  };
  return (
    <>
      <div className="bg-teal-200  w-full   col-span-2  grid">
        <div className="max-h-[32rem] min-h-[32rem]  p-2 flex flex-col gap-2 overflow-x-hidden  overflow-y-scroll ">
          {chat.map((packet: any, index: number) => (
            <Message
              profile_picture=""
              name=""
              message={packet.message}
              key={index}
              isSender={packet.isSender}
            />
          ))}
        </div>

        <div className=" w-full flex ">
          <input
            type="text"
            className="w-full p-3 "
            autoFocus={true}
            placeholder="message"
            ref={inputRef}
            name="message"
            value={msg}
            onChange={(e: any) => setMsg(e.target.value)}
            onKeyDown={(e:any)=>{
              if(e.key=="Enter"){
                sendMsgHandler()
              }
               
            }}
          />
          <button className="p-3  bg-slate-100 " onClick={sendMsgHandler}>
            <FiSend />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatContent;
