import React from 'react'

const Details = (props) => {

    return (
        <div>
            <div className="details-img">
                <img src={props.img} alt="" />
            </div>
            <h3 className="details-title">{props.title}</h3>
            <h4 className="details-artist">{props.artist}</h4>
        </div>
    )
}

export default Details