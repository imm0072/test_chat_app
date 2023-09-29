import React from "react";
interface propsMessage {
  name: string;
  profile_picture: string;
  message: string;
  isSender: boolean;
}
const Message: React.FC<propsMessage> = ({ isSender, message }) => {
  return (
    <>
      {isSender ? (
        <div className=" w-full  h-min p-2 m-2 flex gap-2  ">
          {" "}
          {/* chat item recived */}
          <div className="rounded-md">
            <img
              src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
              height={50}
              width={50}
              alt="avt"
            />
          </div>
          <div className="bg-teal-500 p-2 rounded-md">{message}</div>
        </div>
      ) : (
        <div className=" w-full h-min   ">
          {/* chat item sent */}
          <div className=" w-max bg-teal-900 text-emerald-50 p-2 rounded-md float-right mr-2">
            {message}
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
