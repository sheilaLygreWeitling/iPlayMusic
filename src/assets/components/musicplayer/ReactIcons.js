import React from 'react'
import { AiFillBackward, AiOutlineBackward, AiFillFastForward, AiOutlineForward } from "react-icons/ai";
import { BsFillPlayFill, BsPause } from "react-icons/bs";


const ReactIcons = (icon) => {
    return (
        <div>
            <AiFillBackward />
            <AiOutlineBackward />
            <AiFillFastForward />
            <AiOutlineForward />
            <BsFillPlayFill />
            <BsPause />
        </div>
    )
}

export default ReactIcons