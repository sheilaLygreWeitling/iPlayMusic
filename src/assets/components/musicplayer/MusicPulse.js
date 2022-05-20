import { motion } from 'framer-motion';

const MusicPulse = () => {
    return ( 
        <div className="relative flex justify-center items-center">
            <motion.div className="absolute h-[260px] w-[260px] rounded-full bg-pink"
               animate={{
                scale: [1, 1.4, 1] ,
                opacity: [0.8, 0.2, 0.8]
            }}
              transition={{ 
                repeat: Infinity, 
                duration: 0.75  
              }}
            ></motion.div>
             <motion.div className="absolute h-[260px] w-[260px] rounded-full bg-pink"
               animate={{
                scale: [0.9, 1.2, 0.9] ,
                opacity: [0.8, 0.2, 0.8]
            }}
              transition={{ 
                repeat: Infinity, 
                duration: 0.75
              }}
            ></motion.div>
        </div> 
    );
}
 
export default MusicPulse;