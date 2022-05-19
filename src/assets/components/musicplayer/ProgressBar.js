import React, { useRef } from "react";

const secToMin = (time) => {
    let min = Math.floor(time / 60);
    let seconds = time - min * 60;
    return `${min.toString()}:${seconds.toString().length <= 1 ? `0${seconds}` : seconds.toString()
        }`;
};



const ProgressBar = (props) => {
    return (
        <div className="flex flex-col items-center my-[1rem]">
            <input type="range" name="track" id="track" value={Math.floor(props.currentTime)} max={Math.floor(props.duration)} step="1" className="w-[20rem] h-0.5 appearance-none" />
            <div className="w-[20rem] flex justify-between my-[1rem] ">
                <div className="">
                    <p>{secToMin(Math.floor(props.currentTime))}</p>
                </div>
                <div className="">
                    <p>{secToMin(Math.floor(props.duration))}</p>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar