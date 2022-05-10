import React from "react"

export default function Card(props) {
    let cardBadge
    if (props.location.freeParking === "yes") {
        cardBadge = "Free Parking";
    }
    return (
        <div className="card__container card__divider">
            <div className="card__container-img">
                {cardBadge && <div className="card__badge">{cardBadge}</div>}
                <img src={props.location.imageUrl} className="card__img" />
            </div>
            
            <div className="card__content">
                <span className="card__icon"><i className="fa-solid fa-location-dot" ></i></span>
                <span className="card__location">{props.location.location} </span>
                <span ><a href={props.location.googleMapsUrl} className="card__map">View on Google Maps</a></span>
                <h2 className="card__title">{props.location.title}</h2>
                <p className="card__dates">{props.location.startDate} - {props.location.endDate}</p>
                <p className="card__body">{props.location.description}</p>
            </div>
            
        </div>
    )
}