import React, { useState, useEffect } from 'react'
import MusicPulse from './MusicPulse';
import Player from './Player'
import axios from 'axios';

// const songs = [
//     {
//         title: "A Horse with No Name",
//         artist: "Panic! at the Disco",
//         img_src: "./music/darthVader.jpg",
//         src: "./music/aHorseWithNoName.mp3",
//     },
//     {
//         title: "Song 2",
//         artist: "Artist 2",
//         src: "./music/somebody-new.mp3"
//     },
//     {
//         title: "Song 3",
//         artist: "Artist 3",
//         src: "./music/on-n-on.mp3"
//     },
//     {
//         title: "Song 4",
//         artist: "Artist 4",
//         src: "./music/somebody-new.mp3"
//     }
// ]



const PlayingNow = () => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);
    const [token, setToken] = useState('');
    const [tracksarray, setTracksArray] = useState([]);
    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > tracksarray.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        });
    }, [currentSongIndex]);

    console.log(tracksarray)

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem('token');

        if (!token && hash) {
            token = hash
                .substring(1)
                .split('&')
                .find((elem) => elem.startsWith('access_token'))
                .split('=')[1];

            window.location.hash = '';
            window.localStorage.setItem('token', token);
        }

        setToken(token);

        if (token) {
            console.log("Hej")
            const InitialSongs = async () => {
                var trackids =
                    '7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B%2C6pvqBIceXlX3zC09vqHOEo%2C2iblMMIgSznA464mNov7A8%2C4iV5W9uYEdYUVa79Axb7Rh%2C1301WleyT98MSxVHPZCA6M';
                const { data } = await axios.get(
                    `https://api.spotify.com/v1/tracks?ids=${trackids}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log("fetch", data.tracks)
                setTracksArray(data.tracks);
            };
            InitialSongs();
        }
    }, []);

    return (
        <div>

            { tracksarray.length && <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={tracksarray} /> }

        </div>
    )
}

export default PlayingNow