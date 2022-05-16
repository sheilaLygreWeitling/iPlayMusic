import React from 'react'
import PlayingNow from '../assets/components/MusicPlayerComponents/PlayingNow'
import ArrowBack from '../assets/components/Heading/ArrowBack'
import Search from '../assets/components/Heading/Search'
import Playing from '../assets/components/Heading/Playing'



const MusicPlayer = () => {
    return (
        <div>
            <div className='flex justify-center gap-[115px] m-4'>
                <div className='text-white'>
                    <ArrowBack />
                </div>
                <div className='text-white'>
                    <Playing />
                </div>
                <div className='text-white'>
                    <Search />
                </div>
            </div>
            <div>
                <PlayingNow />
            </div>

        </div>
    )
}

export default MusicPlayer