import React from 'react'
import PlayingNow from '../assets/components/MusicPlayerComponents/PlayingNow'
import ArrowBack from '../assets/components/Heading/ArrowBack'
import Search from '../assets/components/Heading/Search'
import Playing from '../assets/components/Heading/Playing'



const MusicPlayer = () => {
    return (
        <div>
                <nav className='flex justify-center gap-[115px] m-4'>
                
                    <ArrowBack />
            
                    <Playing /> 
            
                    <Search />
                </nav>
            <div>
                <PlayingNow />
            </div>

        </div>
    )
}

export default MusicPlayer