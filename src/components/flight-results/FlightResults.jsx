import './flightresult.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import FlightSelected from '../flight-selected/FlightSelected';
import Context from '../../context';
import { useContext } from 'react';

const FlightResult = () => {
    const { flightSearchResult } = useContext(Context);
    return (
        <section className='flight-results-container'>
            <div className="flight-results-container_options">
            {console.log('es dentro del flight result', flightSearchResult)}
            {flightSearchResult.map((flight)=>{
                return (
                    <div className="flight-option"> 
                    <div className="flight-option_details">
                        <div className="flight-option_details_outbound">
                            <div className="flight-logo">
                            <FontAwesomeIcon icon={faPlane} />
                            </div>
                            <div className="flight-departure">
                                <h3 className="flight-departure_time">{flight.itineraries[0].duration}</h3>
                                <h4 className="flight-departure_airport">BCN</h4>
                            </div>
                            <div className="flight-stops">direct</div>
                            <div className="flight-arrival">
                            <h3 className="flight-departure_time">09:35</h3>
                                <h4 className="flight-departure_airport">MAD</h4>
                            </div>
                        </div>

                        <div className="flight-option_details_inbound">
                        <div className="flight-logo return">
                            <FontAwesomeIcon icon={faPlane} />
                            </div>
                            <div className="flight-departure">
                                <h3 className="flight-departure_time">18:25</h3>
                                <h4 className="flight-departure_airport">MAD</h4>
                            </div>
                            <div className="flight-stops">direct</div>
                            <div className="flight-arrival">
                            <h3 className="flight-departure_time">19:45</h3>
                                <h4 className="flight-departure_airport">BCN</h4>
                            </div>
                        </div>

                    </div>
                    <div className="flight-option_price">
                        <div className="flight-option_price_total">
                            <span>€</span><span>80.75</span>
                        </div>
                        <div className="flight-option_price_cta">Select</div>
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