import React from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md"
import { useNavigate } from 'react-router-dom' 


const ArrowBack = () => {

    const navigate = useNavigate();

    return (
        <div> 
            <MdOutlineArrowBackIos onClick={() => navigate(-1)}/>
        </div>
    )
}

export default ArrowBack