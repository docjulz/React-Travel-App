import React from "react"

export default function Card(props) {
    return (
        <div className="card__container">
            <img src={props.location.imageUrl} className="card__img" />
            <div className="card__header">
                <span><i class="fa-solid fa-location-dot"></i>icon</span>
                <span>{props.location.location}</span>
                <span><a href={props.location.googleMapsUrl}>View on Google Maps</a></span>
            </div>
            <div className="card__body">
                <p>title</p>
                <p>dates</p>
                <p>body</p>
            </div>
        </div>
    )
}