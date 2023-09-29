import React from "react"; 
const ChatUserList: React.FC<any> = (props) => {

  const userList=props.userList;
  return (
    <>
      <div className="bg-slate-300  min-h-[32rem] overflow-hidden overflow-y-scroll ">
        <ul>  
          {
            userList.map((user:any,key:number)=> <li 
            key={key} 
            className="w-full p-2 hover:bg-slate-500 border-b-2 border-indigo-500 capitalize"
            onClick={()=>{alert(user.id)}}
            >
            <a href="#">{user.name}</a>
          </li>)
          }
        </ul>
      </div>
    </>
  );
};
export default ChatUserList;
