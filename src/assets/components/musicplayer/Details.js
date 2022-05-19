import React, { useState } from 'react'
import { setState } from "react";
import MusicDisc from '../../img/MusicDisc.png';
import MusicPulse from './MusicPulse';
import { motion } from 'framer-motion';


const Details = (props) => {
    console.log(props.img);
    /* const [ musicDisc, useMusicDisc ] = useState() */

    return (
        <div className="text-center flex justify-center flex-col items-center">
            
            <div className="details-img w-[280px] h-[280px] relative flex justify-center items-center mt-[4rem] mb-[3rem]">
                <MusicPulse className="absolute" />
                <motion.img src={props.img == null ? MusicDisc :  props.img} className="absolute rounded-full w-[260px] h-[260px]" 
                    animate={{
                        rotate: 360
                    }}
                    transition={{ 
                        ease: "linear",
                        repeat: Infinity, 
                        duration: 7  
                    }}
                />
            </div>
    
            <div className="my-[2rem]">
                <h3 className="details-title dark:text-white">{props.title}</h3>
                <h4 className="details-artist dark:text-white">{props.artist}</h4>
            </div>
        </div>
    )
}

export default Details