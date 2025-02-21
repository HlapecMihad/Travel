export default function Entry(props) {
    //console.log("Props: " + props.src)
    return(
        <>
        <div className="entry-item">
            <div className="entry-item-image">
                <img src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="info-container">
                <img className="entry-item-marker-image" src="https://icon-library.com/images/marker-icon-png/marker-icon-png-26.jpg" alt="Marker" />
                <span className="entry-item-span">{props.country}</span>
                <a href={props.googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
        </div>
        <hr />
        </>
    )
    
}