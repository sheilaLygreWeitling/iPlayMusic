import { motion } from 'framer-motion';
import HomeNav from "../assets/components/homepage/HomeNav";
import QuotesComponent from "../assets/components/homepage/QuotesComponent";
import PulseFigure2 from "../assets/img/SVG/SVG/PulseFigure2";

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
