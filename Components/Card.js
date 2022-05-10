import React from "react"

export default function Card(props) {
    let cardBadge
    if (cardBadge === "yes") {
        cardBadge = "Free Parking";
    }
    return (
        <div className="card__container card__divider">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.location.imageUrl} className="card__img" />
            <div className="card__content">
                <span className="card__icon"><i class="fa-solid fa-location-dot" ></i></span>
                <span className="card__location">{props.location.location} </span>
                <span ><a href={props.location.googleMapsUrl} className="card__map">View on Google Maps</a></span>
                <h2 className="card__title">{props.location.title}</h2>
                <p className="card__dates">{props.location.startDate}-{props.location.endDate}</p>
                <p className="card__body">{props.location.description}</p>
            </div>
            
        </div>
    )
}