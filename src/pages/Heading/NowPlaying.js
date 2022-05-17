import React from 'react'
import ArrowBack from '../../assets/components/Heading/ArrowBack'
import Search from '../../assets/components/Heading/Search'


const NowPlaying = () => {
    return (
        <div>
            <div className='flex gap-[310px]'>
                <div className='ml-4'>
                    <ArrowBack />
                </div>
                <div className='m-0'>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default NowPlaying