import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
const MyNavBar = () => {
  const [isActive, setIsActive] = useState(
    window.innerWidth <= 768 ? false : true
  );
  const handleResize = () => {
    setIsActive(window.innerWidth <= 768 ? false : true);
  };

  useEffect(() => {
    window.addEventListener("resize", () => handleResize());
    return () => {
      window.removeEventListener("resize", () => handleResize());
    };
  });
  return (
    <nav className="block lg:flex  justify-start ">
      <div className="w-screen  p-2 flex  justify-around lg:justify-start">
        <h4>Website Logo</h4>
        <div
          onClick={() => setIsActive(!isActive)}
          className="block md:hidden lg:hidden "
        >
          <span>{isActive ? <MdOutlineClose /> : <AiOutlineMenu />}</span>
        </div>
      </div>

      <div className="w-screen  p-2 flex ">
        <ul
          className={`flex flex-col flex-wrap  justify-start  justify-items-start gap-2 ${
            isActive ? "block" : "hidden"
          }  md:flex-row`}
        >
          <li >
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Let Chat</a>  
          </li> 
        </ul>
      </div>
    </nav>
  );
};

export default MyNavBar;
