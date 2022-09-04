import './flightresult.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

const FlightResult = () => {
    return (
        <section className='flight-results-container'>
            <div className="flight-results-container_options">
                <div className="flight-option">
                    <div className="flight-option_outbound"></div>
                    <div className="flight-option_inbound"></div>
                    <div className="flight-option_price"></div>
                </div>
            </div>
            <div className="flight-results-container_selected"></div>
        </section>
    )

}

export default FlightResult;