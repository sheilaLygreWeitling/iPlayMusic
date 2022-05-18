import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";


const Search = () => {

    const url = window.location.pathname

    return (
        <div>
            <div>
                <button>{url === '/NowPlaying' ? "" : <AiOutlineSearch className='text-xl'/> }</button> 
            </div>
        </div>
    )
}

export default Search