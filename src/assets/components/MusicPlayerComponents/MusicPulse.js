import MusicPulseSVG from "../../img/SVG/SVG/MusicPulseSVG"
import { motion } from 'framer-motion'

const MusicPulse = () => {
    return ( 
        <div className="w-[355] h-[355px] relative flex justify-center items-center">
                <motion.div className="absolute w-[280px] h-[280px] bg-pink rounded-full"
                    animate={{ 
                        scale: [1.1, 1.4, 1.1],
                        opacity: [ 1, 0.5, 1 ]
                    }}
                        
                    transition={{ 
                        /* ease: "linear", */
                        duration: .75,
                        repeat: Infinity
                    }}
                ></motion.div>
                
                <motion.div className="absolute w-[280px] h-[280px] bg-pink rounded-full"
                    animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [  1, 0.8, 1 ]
                    }}
                        
                    transition={{ 
                        /* ease: "linear", */
                        duration: 1,
                        repeat: Infinity
                    }}
                ></motion.div>
                
                <MusicPulseSVG className="absolute"/>
        </div>
     );
}
 
export default MusicPulse;