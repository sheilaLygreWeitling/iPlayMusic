import { useState } from "react";
import PlayIcon from "../../img/SVG/PlayIcon";

const songAray = [
  {
      title: "Don't mess with my man",
      artist: "Luscy Pearl",
      duration: "3:38", 
      img_src: "./music/darthVader.jpg",
      id: "0"
  },
  {
    title: "Falling Higher",
    artist: "Gaidaa",
    duration: "3:18", 
    img_src: "./music/darthVader.jpg",
    id: "1"
  },
  {
    title: "Valentina",
    artist: "Dreamer Isioma",
    duration: "2:09", 
    img_src: "./music/darthVader.jpg",
    id: "2"
  },
  {
    title: "Another Lover",
    artist: "Little Dragon",
    duration: "4:26", 
    img_src: "./music/darthVader.jpg",
    id: "3"
  }, 
  {
    title: "Hard",
    artist: "Dreamer Isioma",
    duration: "2:33", 
    img_src: "./music/darthVader.jpg",
    id: "4"
},
{
  title: "Dontcha",
  artist: "The Internet",
  duration: "3:21", 
  img_src: "./music/darthVader.jpg",
  id: "5"
},
{
  title: "Read my mind",
  artist: "Lianne La Havas",
  duration: "4:48", 
  img_src: "./music/darthVader.jpg",
  id: "6"
},
{
  title: "Body Move",
  artist: "Dizzy Fae",
  duration: "2:57", 
  img_src: "./music/darthVader.jpg",
  id: "7"
}, 
{
  title: "Run To The Sun",
  artist: "N.E.R.D",
  duration: "4:51", 
  img_src: "./music/darthVader.jpg",
  id: "8"
}, 
{
  title: "I felt Love",
  artist: "Blue Hawaii",
  duration: "3:12", 
  img_src: "./music/darthVader.jpg",
  id: "9"
}
]


const Songs = () => {

  const [playicon, setPlayicon] = useState(true)
    return ( 

    <ul className="flex flex-col gap-y-6">{songAray.map(song =>
  
      <li key={song.id} className="flex gap-4 items-center mr-[25px] ml-[19px]" >
       <PlayIcon />
        
        <div>
          <h2 className="text-headers6 font-bold">{song.title}</h2>
          <h3 className="text-small">{song.artist}</h3>
        </div>

        <p className="text-small  ml-auto">{song.duration}</p>
      </li>
  
    )}</ul>  
  
  );
}
 
export default Songs;