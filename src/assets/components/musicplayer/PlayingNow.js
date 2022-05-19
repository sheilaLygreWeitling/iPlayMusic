import React, { useState, useEffect } from 'react'
import Player from './Player'

const songs = [
    {
        title: "A Horse with No Name",
        artist: "Panic! at the Disco",
        img_src: "./music/darthVader.jpg",
        src: "./music/aHorseWithNoName.mp3",
    },
    {
        title: "Song 2",
        artist: "Artist 2",
        src: "./music/somebody-new.mp3"
    },
    {
        title: "Song 3",
        artist: "Artist 3",
        src: "./music/on-n-on.mp3"
    },
    {
        title: "Song 4",
        artist: "Artist 4",
        src: "./music/somebody-new.mp3"
    }
]



const PlayingNow = (props) => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);

    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        });
    }, [currentSongIndex]);
    return (
        <div>
            <Player
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs}
            />
        </div>
    )
}

export default PlayingNow