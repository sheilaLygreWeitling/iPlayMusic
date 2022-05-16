import { AiFillStepBackward, AiOutlineBackward, AiFillForward, AiFillStepForward } from "react-icons/ai";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";


const Controls = (props) => {

    return (
        <div>
            <button className='musicPlayer-btn skipBackward-btn' onClick={() => props.SkipSong(false)} >
                <AiFillStepBackward />
            </button>
            <button className='musicPlayer-btn backwards-btn'>
                <AiOutlineBackward />
            </button>
            <button className='musicPlayer-btn play-btn' onClick={() => props.setIsPlaying(!props.isPlaying)}>
                {props.isPlaying ? <BsPauseFill /> : <BsFillPlayFill />}
            </button>
            <button className='musicPlayer-btn forward-btn'>
                <AiFillForward />
            </button>
            <button className='musicPlayer-btn skipForward-btn' onClick={() => props.SkipSong()}  >
                <AiFillStepForward />
            </button>
        </div>
    )
}

export default Controls