
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo.png"
import { currentDateFormat } from "../utils/utils"
import { Clock } from "./Clock"

export const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <nav
        className=" 
        bg-transparent
        absolute
      w-[100vw]
    laptop:px-[48px] laptop:py-[12px]
    px-[15px] py-[12px]
     flex  justify-between items-center "
      >
        <img
          onClick={() => navigate("/")}
          className="
       laptop:h-[60px]
       h-[50px]
        cursor-pointer"
          src={Logo}
          alt="logo"
        />

        <div className=" sm:visible absolute invisible right-0 bg-primary-color bg-opacity-70 rounded-bl-xl  text-white text-[18px] px-10 text-right py-4">
            <h2 className="font-bold drop-shadow-md ">{currentDateFormat()}</h2>
            <p className="font-bold drop-shadow-md"><Clock/></p>
        </div>
      </nav>
    </>
  )
}
