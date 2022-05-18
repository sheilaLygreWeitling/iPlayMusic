import React from 'react'
import PlayingNow from '../assets/components/MusicPlayerComponents/PlayingNow'
import ArrowBack from '../assets/components/Heading/ArrowBack'
import Playing from '../assets/components/Heading/Playing'

const MusicPlayer = () => {
    return (
        <div>
            <div className='flex justify-start gap-[115px] m-4'>
                <div>
                    <ArrowBack />
                </div>
                <div>
                    <Playing />
                </div>
            </div>
            <div>
                <PlayingNow />
            </div>

        </div>
    )
}

export default MusicPlayer