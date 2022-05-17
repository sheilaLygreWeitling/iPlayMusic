import { Link } from "react-router-dom"
import { BsHeart, BsMusicNoteBeamed } from "react-icons/bs";

import PulseFigure2 from "../assets/img/SVG/SVG/PulseFigure2";

import ToggleDarkmode from "../assets/components/darkmode/ToggleDarkmode"

import { motion } from 'framer-motion'
import QuotesComponent from "../assets/components/HopePageComponents/QuotesComponent";

const HomePage = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b dark:from-gradientRedFrom to-gradientRedTo flex flex-col items-center">
        <motion.div className="relative top-[-6rem] left-[-1rem]"
        animate={{ rotate: [ 0, -30, -5, 0 ], 
          y: [0, 75, 0], 
          x: [0, 100, -75, 0], 
          scale: [1.1, 1.2, 1.1] }}
        transition={{ repeat: Infinity, duration: 30  }}
        >
           <PulseFigure2 className="w-[20rem] h-[20rem]" />
        </motion.div>
    
        <QuotesComponent/>


      {/* <div className="w-[80%]">
        <h1 className="text-center font-bold text-headers4 my-[1rem] dark:text-white ">
            {"No Music"} <br />
            {"No Life"}
        </h1>
        <p className="text-center text-normal dark:text-white">
            {"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum distinctio, sint ab iste, voluptatem nesciunt rem"}
        </p>
      </div> */}


      <nav className="w-[80%] my-[5rem] text-5xl dark:text-white flex flex-row justify-around">
        
        <div className="border-4 border-black dark:border-white rounded-full p-[1rem] flex justify-center items-center">
          <ToggleDarkmode />
        </div>
        
        <Link to="/Page1">
            <div className="border-4 border-black  dark:border-white rounded-full p-[1rem] flex justify-center items-center">
                <BsHeart />
            </div>
        </Link>
        <Link to="/Page2">
            <div className="border-4 border-black  dark:border-white rounded-full p-[1rem] flex justify-center items-center">
                <BsMusicNoteBeamed />
            </div>
        </Link>
      </nav>
    </div>
  );
};


export default HomePage;
