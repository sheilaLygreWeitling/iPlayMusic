import { useEffect, useState } from 'react';
import PlayIcon from "../../img/SVG/PlayIcon";
import axios from 'axios';

// const songAray = [
//   {
//       title: "Don't mess with my man",
//       artist: "Luscy Pearl",
//       duration: "3:38",
//       img_src: "./music/darthVader.jpg",
//       id: "0"
//   },
//   {
//     title: "Falling Higher",
//     artist: "Gaidaa",
//     duration: "3:18",
//     img_src: "./music/darthVader.jpg",
//     id: "1"
//   },
//   {
//     title: "Valentina",
//     artist: "Dreamer Isioma",
//     duration: "2:09",
//     img_src: "./music/darthVader.jpg",
//     id: "2"
//   },
//   {
//     title: "Another Lover",
//     artist: "Little Dragon",
//     duration: "4:26",
//     img_src: "./music/darthVader.jpg",
//     id: "3"
//   },
//   {
//     title: "Hard",
//     artist: "Dreamer Isioma",
//     duration: "2:33",
//     img_src: "./music/darthVader.jpg",
//     id: "4"
// },
// {
//   title: "Dontcha",
//   artist: "The Internet",
//   duration: "3:21",
//   img_src: "./music/darthVader.jpg",
//   id: "5"
// },
// {
//   title: "Read my mind",
//   artist: "Lianne La Havas",
//   duration: "4:48",
//   img_src: "./music/darthVader.jpg",
//   id: "6"
// },
// {
//   title: "Body Move",
//   artist: "Dizzy Fae",
//   duration: "2:57",
//   img_src: "./music/darthVader.jpg",
//   id: "7"
// },
// {
//   title: "Run To The Sun",
//   artist: "N.E.R.D",
//   duration: "4:51",
//   img_src: "./music/darthVader.jpg",
//   id: "8"
// },
// {
//   title: "I felt Love",
//   artist: "Blue Hawaii",
//   duration: "3:12",
//   img_src: "./music/darthVader.jpg",
//   id: "9"
// }
// ]


const Songs = () => {


const [token, setToken] = useState('');
const [tracksarray, setTracksArray] = useState([]);


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
            setTracksArray(data.tracks);
        };
        InitialSongs();
    }
}, []);


const secToMin = (time) => {
    let min = Math.floor(time / 60000);
    let seconds = ((time % 60000) / 1000).toFixed(0);
    return `${min.toString()}:${seconds.toString().length <= 1 ? `0${seconds}` : seconds.toString()
        }`;
};

const initialSongs = () => {
    return tracksarray.map((item, index) => (
        <ul className="flex flex-col gap-y-6">
            <li key={index} className="flex gap-4 items-center mr-[25px] ml-[19px]">

                <PlayIcon />
                {/* <img src={item?.album?.images[0].url} /> */}
                <div>
                    <h2 className="text-headers6 font-bold">{item?.name}</h2>
                    <h3 className="text-small">{item?.album?.artists[0].name}</h3>
                </div>
                {/* {initialSongs()} */}

                <p className="text-small  ml-auto">
                    {/* {song.duration} */}

                    {/*
                    let min = Math.floor(time / 60);
                    let seconds = time - min * 60;
                    */}
                    {/* {(Math.floor(tracksarray[index].duration_ms / 1000).split())} */}

                    {secToMin(tracksarray[index].duration_ms)}


                </p>

            </li>

        </ul>
    ));
};

console.log(tracksarray)
console.log()

  const [playicon, setPlayicon] = useState(true)
//     return (

//     <ul className="flex flex-col gap-y-6">{songAray.map(song =>

//       <li key={song.id} className="flex gap-4 items-center mr-[25px] ml-[19px]" >
//        <PlayIcon />

//         <div>
//           <h2 className="text-headers6 font-bold">{song.title}</h2>
//           <h3 className="text-small">{song.artist}</h3>
//         </div>

//         {initialSongs()}

//         <p className="text-small  ml-auto">{song.duration}</p>
//       </li>

//     )}</ul>

//   );

return (
    <header className="App-header">
        {initialSongs()}
    </header>
);

}

export default Songs;