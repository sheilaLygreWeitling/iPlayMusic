
import React, { useState, useRef, useEffect } from 'react'
import Details from './Details'
import Controls from './Controls'
import ProgressBar from './ProgressBar'

const Player = (props) => {
    console.log(props.songs[props.currentSongIndex].src)
    const audioElement = useRef(null);
    useEffect(() => {
        if (audioElement && audioElement.current) {
            console.log(audioElement.current.duration)
        }
    }, [audioElement])
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (isPlaying) {
            audioElement.current.play();
        } else {
            audioElement.current.pause();
        }
    });

    const handleOnLoad = () => {
        setDuration(audioElement.current.duration);
    }

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }




    return (
        <div>
            <div className="c-player">
                <audio src={props.songs[props.currentSongIndex].src} ref={audioElement} onLoadedMetadata={handleOnLoad}></audio>
                <Details songs={props.songs} img={props.songs[props.currentSongIndex].img_src} title={props.songs[props.currentSongIndex].title} artist={props.songs[props.currentSongIndex].artist} />
                <ProgressBar duration={duration} />
                <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            </div>
        </div>
    )
}

export default Player 