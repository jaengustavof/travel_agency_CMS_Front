import './flightresult.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import FlightSelected from '../flight-selected/FlightSelected';
import Context from '../../context';
import { useContext } from 'react';



const FlightResult = () => {
    const { flightSearchResult } = useContext(Context);
    const {selectedFlight, setSelectedFlight } = useContext(Context);

    return (
        <section className='flight-results-container'>
            <div className="flight-results-container_options">
            {flightSearchResult.map((flight)=>{        
                return (
                    <div className="flight-option" key={flight.id}> 
                        <div className="flight-option_details">
                            <div className="flight-option_details_outbound">
                                <div className="flight-logo">
                                <FontAwesomeIcon icon={faPlane} />
                                </div>
                                <div className="flight-departure">
                                    <h3 className="flight-departure_time">{flight.itineraries[0].segments[0].departure.at.slice(11, 16)}</h3>
                                    <h4 className="flight-departure_airport">{flight.itineraries[0].segments[0].departure.iataCode}</h4>
                                </div>
                                <div className="flight-stops">{flight.itineraries[0].segments.length <=1?'direct':flight.itineraries[0].segments.length-1+' stops'}</div>
                                <div className="flight-arrival">
                                    <h3 className="flight-departure_time">{flight.itineraries[0].segments[flight.itineraries[0].segments.length-1].arrival.at.slice(11, 16)}</h3>
                                    <h4 className="flight-departure_airport">{flight.itineraries[0].segments[flight.itineraries[0].segments.length-1].arrival.iataCode}</h4>
                                </div>
                            </div>

                            <div className="flight-option_details_inbound">
                            <div className="flight-logo return">
                                <FontAwesomeIcon icon={faPlane} />
                                </div>
                                <div className="flight-departure">
                                    <h3 className="flight-departure_time">{flight.itineraries[1].segments[0].departure.at.slice(11, 16)}</h3>
                                    <h4 className="flight-departure_airport">{flight.itineraries[1].segments[0].departure.iataCode}</h4>
                                </div>
                                <div className="flight-stops">{flight.itineraries[1].segments.length <=1?'direct':flight.itineraries[1].segments.length-1+' stops'}</div>
                                <div className="flight-arrival">
                                <h3 className="flight-departure_time">{flight.itineraries[1].segments[flight.itineraries[1].segments.length-1].arrival.at.slice(11, 16)}</h3>
                                    <h4 className="flight-departure_airport">{flight.itineraries[1].segments[flight.itineraries[1].segments.length-1].arrival.iataCode}</h4>
                                </div>
                            </div>

                        </div>
                        <div className="flight-option_price">
                            <div className="flight-option_price_total">
                                <span>€</span><span>{flight.price.total}</span>
                            </div>
                            <div className="flight-option_price_cta" onClick={() => setSelectedFlight(flight) }>Select</div>
                        </div>
                    </div>
                )
            })}


            </div>
            <div className="flight-results-container_selected">
                <FlightSelected/>
            </div>
        </section>
    )

}

export default FlightResult;