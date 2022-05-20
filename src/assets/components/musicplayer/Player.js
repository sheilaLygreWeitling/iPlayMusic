
import React, { useState, useRef, useEffect } from 'react'
import Details from './Details'
import Controls from './Controls'
import ProgressBar from './ProgressBar'

const Player = (props) => {
    console.log(props.songs)
    //console.log(props.songs[props.currentSongIndex].preview_url)

    const audioElement = useRef(null);
    useEffect(() => {
        if (audioElement && audioElement.current) {
            audioElement.current.addEventListener('timeupdate', () => {
                setCurrentTime(audioElement.current.currentTime);
            })
        }
    }, [audioElement])
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        if (isPlaying) {
            audioElement.current.play();
        } else {
            audioElement.current.pause();
        }
    });

    const handleOnLoad = () => {
        setDuration(audioElement.current.duration);
        setCurrentTime(audioElement.current.currentTime);

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



    // {item?.album?.images[0].url}
    // props.songs[props.currentSongIndex].img_src
    // props.songs[props.currentSongIndex].album?.images[0].url
    return (
        <div>
            <div className="c-player">
                <audio src={props.songs[props.currentSongIndex].preview_url} ref={audioElement} onLoadedMetadata={handleOnLoad}></audio>
                <Details songs={props.songs} img={props.songs[props.currentSongIndex].album?.images[0].url} title={props.songs[props.currentSongIndex].name} artist={props.songs[props.currentSongIndex].artists[0].name} />
                <ProgressBar duration={duration} currentTime={currentTime} />
                <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            </div>
        </div>
    )
}

export default Player