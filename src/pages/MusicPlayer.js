import React from 'react'
import PlayingNow from '../assets/components/MusicPlayerComponents/PlayingNow'
import ArrowBack from '../assets/components/Heading/ArrowBack'
import Playing from '../assets/components/Heading/Playing'

const MusicPlayer = () => {
    return (
        <div>
                <nav className='flex justify-center gap-[115px] m-4'>
                
                    <ArrowBack />
            
                    <Playing /> 
                </nav>

            <div>
                <PlayingNow />
            </div>

        </div>
    )
}

export default MusicPlayer