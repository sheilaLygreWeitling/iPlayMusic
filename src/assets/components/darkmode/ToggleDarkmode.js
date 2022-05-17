import React, { useState } from 'react';
import { useContext, setState } from "react";
import { BsCircleHalf } from "react-icons/bs";
import { ThemeContext } from '../context/ThemeContext';

import { motion } from 'framer-motion'

const Toggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [ rotation, setRotation ] = useState(false)
    
    
    const themeFun = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
        setRotation(!rotation)    
    }

    return (
        <motion.div className="transition duration-500 ease-in-out"
            animate={{ rotate: rotation ? 180 : 0, 
            ease: "easeInOut"  }}
            transition={{ duration: 0.5 }}>

            {theme === 'dark' ? ( <BsCircleHalf onClick={themeFun} /> ) : 
                <BsCircleHalf onClick={themeFun} /> }
        
        </motion.div>
    );
};

export default Toggle;