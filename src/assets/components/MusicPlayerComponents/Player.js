
import React, { useState, useRef, useEffect } from 'react'
import Details from './Details'
import Controls from './Controls'

const Player = (props) => {
    console.log(props.songs[props.currentSongIndex].src)
    const audioElement = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioElement.current.play();
        } else {
            audioElement.current.pause();
        }
    });

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
            <div>

                <div className="c-player">
                    <audio src={props.songs[props.currentSongIndex].src} ref={audioElement} ></audio>
                    <h4>Playing now</h4>
                    <Details song={props.songs} img={props.img_src} artist={props.artist} />
                    <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
                    <p>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
                </div>

            </div>
        </div>
    )
}

export default Player 