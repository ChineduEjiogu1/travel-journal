import '/src/TravelCard.css'
import locationPoint from '/src/assets/location-point.svg'


function Card(props)
{
    return (
        <div className='card-container'>
            <div className='main-container'>
                <img className='location-img' src={props.imageUrl} alt="" />
            </div>
            
            <div className='travel-info'>
                <div className='location-place'>
                    <img className='small-icon' src={locationPoint} alt="" />
                    <h6>{props.location}</h6>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className='title'>{props.title}</h2>
                <h6 className='date'>{props.startDate} - {props.endDate}</h6>
                <p className='description-paragraph'>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;