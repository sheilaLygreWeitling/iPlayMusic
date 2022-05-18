import { Link } from "react-router-dom"
import { BsHeart, BsMusicNoteBeamed } from "react-icons/bs";
import { motion } from 'framer-motion'

import PulseFigure2 from "../assets/img/SVG/SVG/PulseFigure2";

import QuotesComponent from "../assets/components/HopePageComponents/QuotesComponent";
import HomeNav from "../assets/components/HopePageComponents/HomeNav";


const HomePage = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b dark:from-gradientRedFrom to-gradientRedTo flex flex-col items-center">
      <motion.div className="relative top-[-6rem] left-[-1rem]"
        animate={{ rotate: [ 0, -30, -5, 0 ], 
          y: [0, 75, 0], 
          x: [0, 100, -75, 0], 
          scale: [1.1, 1.2, 1.1] }}
        transition={{ 
          repeat: Infinity, 
          duration: 30  
        }}
      >
        <PulseFigure2 className="w-[20rem] h-[20rem]" />
      </motion.div>

      <QuotesComponent/>

      <HomeNav />
    </div>
  );
};


export default HomePage;
