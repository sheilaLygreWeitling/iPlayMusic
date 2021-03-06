import { AiFillStepBackward, AiOutlineBackward, AiFillForward, AiFillStepForward } from "react-icons/ai";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";


const Controls = (props) => {

    return (
        <div>
            <div className="flex justify-center gap-[20px]">
                <button className='musicPlayer-btn skipBackward-btn dark:text-white' onClick={() => props.SkipSong(false)} >
                    <AiFillStepBackward className="text-headers2" />
                </button>
                <button className='musicPlayer-btn backwards-btn dark:text-white'>
                    <AiOutlineBackward className="text-headers2"  />
                </button>
                <button className='musicPlayer-btn play-btn text-[100px]' onClick={() => props.setIsPlaying(!props.isPlaying)}>
                    <svg width="0" height="0">
                        {/*LINEAR GRADIENT ON REACT-ICON*/}
                        <linearGradient id="a" x1="100%" y1="100%" x2="0" y2="0">
                            <stop stopColor="#EE0979" offset="0%" />
                            <stop stopColor="#FF6A00" offset="100%" />
                        </linearGradient>
                    </svg>
                    {props.isPlaying ? <BsPauseFill style={{ fill: "url(#a)" }} /> : <BsFillPlayFill style={{ fill: "url(#a)" }} />}
                </button>
                <button className='musicPlayer-btn forward-btn dark:text-white'>
                    <AiFillForward className="text-headers2"  />
                </button>
                <button className='musicPlayer-btn skipForward-btn dark:text-white' onClick={() => props.SkipSong()}  >
                    <AiFillStepForward className="text-headers2"  />
                </button>
            </div>
        </div>
    )
}

export default Controls