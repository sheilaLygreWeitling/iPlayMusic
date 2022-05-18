import { Link } from "react-router-dom"
import { BsHeart, BsMusicNoteBeamed } from "react-icons/bs";

import ToggleDarkmode from "../darkmode/ToggleDarkmode"

const HomeNav = () => {
    return ( 
        <nav className="w-[80%] my-[5rem] text-5xl dark:text-white flex flex-row justify-around z-10 fixed bottom-[0rem] ">
            <div className="border-4 border-black dark:border-white rounded-full p-[1rem] flex justify-center items-center">
                <ToggleDarkmode />
            </div>
        
        <Link to="/Page1">
            <div className="border-4 border-black  dark:border-white rounded-full p-[1rem] flex justify-center items-center">
                <BsHeart />
            </div>
        </Link>
        
        <Link to="/allsongs">
            <div className="border-4 border-black  dark:border-white rounded-full p-[1rem] flex justify-center items-center">
                <BsMusicNoteBeamed />
            </div>
        </Link>
      </nav>
     );
}
 
export default HomeNav;