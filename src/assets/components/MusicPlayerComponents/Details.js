import React from 'react'


const Details = (props) => {
    console.log(props.img);
    return (
        <div className='text-center'>
            <div className="details-img flex justify-center">
                <img src={props.img} alt="" className=' rounded-[1000px] w-[125px] h-[125px] m-[50px]' />
            </div>
            <div>
                <h3 className="details-title text-white">{props.title}</h3>
                <h4 className="details-artist text-white">{props.artist}</h4>
            </div>
        </div>
    )
}

export default Details